import { Request, Response } from "express";
import { AttachmentModel } from "./Attachment.model";
import { PostModel } from "../Post/Post.model";
import DS from "../../db";
import { UploadedFile } from "express-fileupload";
import { v4 } from "uuid";
import fs from 'fs'

const AttachmentRepo = DS.getRepository(AttachmentModel);
const PostRepo = DS.getRepository(PostModel)

export const createAttachment = async (req: Request, resp: Response) => {

  try {
    //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
    let file = req.files?.file as UploadedFile
    const { post_id } = req.body

    if (!file || !post_id) resp.sendStatus(400)
    const post = await PostRepo.findOneByOrFail({ id: +post_id })

    const name = v4()
    const extension = "." + file.name.split(".")[1]
    const path = './uploads/attachment/'
    file.mv(path + name + extension);
    //send response
    const newAttachment = new AttachmentModel()
    const url = "https://back.podpolye-api.serbin.co" + "/attachment/" + name + extension
    newAttachment.file_url = url
    newAttachment.file = path + name + extension
    newAttachment.post = post
    console.log({ newAttachment });

    await AttachmentRepo.save(newAttachment)
    resp.send(newAttachment)

  } catch (err) {
    resp.status(500).send(err);
    console.log({ err });
  }

}

export const removeAttachment = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params
    const item = await AttachmentRepo.findOneOrFail({
      where: {
        id: +id
      },
      select: {
        file: true
      }
    })
    const path = item.file
    fs.unlink(path, async (e) => {
      if (e) {
        throw e;
      }

      resp.sendStatus(200);
      await AttachmentRepo.delete(item)
    })
  } catch (e) {
    resp.sendStatus(500)
  }
}
