import { Request, Response } from "express";
import { PostModel } from "./Post.model";
import { AccountModel } from "../Account/Account.model";
import DS from "../../db";

const PostRepo = DS.getRepository(PostModel);
const AccountRepo = DS.getRepository(AccountModel)

export const createPost = async (req: Request, resp: Response) => {
  try {
    const { title, description, posted, owner_id } = req.body
    if (!title || !description || !owner_id) resp.sendStatus(400)
    const owner = await AccountRepo.findOneByOrFail({ id: +owner_id })
    const newPost = new PostModel()
    newPost.title = title
    newPost.description = description
    newPost.posted = posted ?? true
    newPost.owner = owner
    await PostRepo.save(newPost)
    resp.status(201).send(newPost)
  } catch (e) {
    resp.sendStatus(500)
    console.log(e);
  }
}

export const getPostById = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params
    const post = await PostRepo.findOneByOrFail({ id: +id })
    resp.send(post)
  } catch (e) {
    resp.sendStatus(500)
    console.log(e);
  }
}

export const getAllPosts = async (req: Request, resp: Response) => {
  try {
    const posts = await PostRepo.find({ relations: { attachments: true } })
    resp.send(posts)
  } catch (e) {
    resp.sendStatus(500)
    console.log(e);
  }
}

export const deletePost = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params
    await PostRepo.delete({ id: +id })
    resp.sendStatus(200)
  } catch (e) {
    resp.sendStatus(500)
    console.log(e);
  }
}