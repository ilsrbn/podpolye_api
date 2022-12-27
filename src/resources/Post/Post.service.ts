import { Request, Response } from "express";
import { PostModel } from "./Post.model";
import { AccountModel } from "../Account/Account.model";
import { AttachmentModel } from '../Attachment/Attachment.model';
import DS from "../../db";
import fs from 'fs'
import slugify from "slugify";

const PostRepo = DS.getRepository(PostModel);
const AccountRepo = DS.getRepository(AccountModel)
const AttachmentRepo = DS.getRepository(AttachmentModel)

export const createPost = async (req: Request, resp: Response) => {
  try {
    const { title, description, posted, event_date } = req.body
    const username = req.query.username as string

    if (!title) resp.sendStatus(400)
    const owner = await AccountRepo.findOneByOrFail({ username })
    const newPost = new PostModel()
    newPost.title = title
    newPost.slug = slugify(title, { lower: true })
    newPost.description = description ? description : ''
    newPost.posted = posted ?? true
    newPost.owner = owner
    if (event_date) newPost.event_date = event_date
    await PostRepo.save(newPost)
    resp.status(201).send(newPost)
  } catch (e) {
    resp.sendStatus(500)
    console.log(e);
  }
}

export const editPost = async (req: Request, resp: Response) => {
  try {
    const { postId } = req.params
    const post = await PostRepo.findOneOrFail({ where: { id: +postId } })

    const { title, description, posted, event_date } = req.body
    console.log({ posted });

    if (title) post.title = title
    if (description) post.description = description
    if (posted !== undefined && posted !== null) post.posted = posted
    if (event_date) post.event_date = event_date

    await PostRepo.save(post)
    resp.send(post)

  } catch (e) {
    resp.sendStatus(500)
    console.log(e);
  }
}

export const getPostBySlug = async (req: Request, resp: Response) => {
  try {
    const { slug } = req.params
    const post = await PostRepo.findOneOrFail({
      where: { id: +slug },
      relations: { attachments: true },
      select: {
        id: true,
        title: true,
        description: true,
        event_date: true,
        posted: true
      }
    })

    resp.send(post)
  } catch (e) {
    resp.sendStatus(500)
    console.log(e);
  }
}

export const setCover = async (req: Request, resp: Response) => {
  try {
    const { postId, attachmentId } = req.body
    const post = await PostRepo.findOneOrFail({ where: { id: +postId } })
    const attachment = await AttachmentRepo.findOneOrFail({ where: { id: +attachmentId } })
    post.cover = attachment
    await PostRepo.save(post)
    resp.send(post)
  } catch (e) {
    resp.sendStatus(500)
    console.log(e);
  }
}

export const getAllPosts = async (req: Request, resp: Response) => {
  try {
    const { search } = req.query
    let posts
    const isAdmin = req.baseUrl.split('/').findIndex(el => el === 'admin') !== -1
    const orderBy = isAdmin ? 'id' : 'event_date'
    if (search) posts = await PostRepo
      .createQueryBuilder('post')
      .select()
      .where(`MATCH(title) AGAINST ('+${search}*' IN BOOLEAN MODE)`)
      .orWhere(`MATCH(description) AGAINST ('+${search}*' IN BOOLEAN MODE)`)
      .leftJoinAndSelect('post.attachments', 'attachments')
      .orderBy(orderBy, 'DESC')
      .getMany();
    else posts = await PostRepo.find({ relations: { attachments: true }, order: { [orderBy]: "DESC" } })

    console.log({ search, posts });

    // const posts = await PostRepo.find({ relations: { attachments: true }, order: { id: "DESC" } })

    resp.send(posts)
  } catch (e) {
    resp.sendStatus(500)
    console.log(e);
  }
}

export const deletePost = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params
    const post = await PostRepo.findOneOrFail({ where: { id: +id }, relations: { attachments: true } })
    await PostRepo.delete({ id: +id })
    console.log(post);

    const attachments = post.attachments || []
    if (!attachments.length) return resp.sendStatus(200)
    for (let index = 0; index < attachments?.length; index++) {
      const element = attachments[index];
      await AttachmentRepo.delete({ id: element.id })
      fs.unlink(element.file, e => { console.log(e) })
    }
    resp.sendStatus(200)

  } catch (e) {
    resp.sendStatus(500)
    console.log(e);
  }
}
