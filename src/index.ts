import express, { Request, Response } from "express";

import cors from 'cors'
import fileUpload from 'express-fileupload'
import morgan from "morgan";
import DS from "./db";

import AccountController from "./resources/Account/Account.controller";
import AttachmentController from "./resources/Attachment/Attachment.controller";

import dotenv from 'dotenv'
import { isLoggedIn } from './middlewares/auth';
import PostController from './resources/Post/Post.controller';

dotenv.config()

const app = express();

app.use(express.json());
app.use(cors())

app.use(fileUpload({
  createParentPath: true
}))
app.use(express.static('uploads'));
app.use(morgan('dev'))

DS.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

app.use("/api/auth", AccountController);
app.get("/api/hola", isLoggedIn, (req: Request, resp: Response) => {
  resp.send({ username: req.query.username })
})
app.use('/api/admin/attachment', isLoggedIn, AttachmentController)
app.use('/api/admin/post', isLoggedIn, PostController)

app.use('/api/attachment', AttachmentController)
app.use('/api/post', PostController)

app.listen(3000, () => {
  console.log("The application is listening on port 3000!");
});
