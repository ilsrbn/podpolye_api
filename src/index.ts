import express, { Request, Response } from "express";
import session from "express-session";
import cors from 'cors'
import fileUpload from 'express-fileupload'
import morgan from "morgan";
import DS from "./db";

import AccountController from "./resources/Account/Account.controller";
import AttachmentController from "./resources/Attachment/Attachment.controller";

declare module 'express-session' {
  interface SessionData {
    user: Object;
  }
}

import dotenv from 'dotenv'
import { isLoggedIn } from './middlewares/auth';
import PostController from './resources/Post/Post.controller';

dotenv.config()

const DAY_IN_MS = 24 * 60 * 60 * 1000

const sessionConfig = {
  name: "pauth",
  secret: process.env.SESSION_SECRET || 'hello',
  cookie: {
    maxAge: DAY_IN_MS,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: true
}

const app = express();

app.use(express.json());
app.use(cors())
app.use(session(sessionConfig))
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
  resp.send("<h1>HOLA AMIGO</h1>")
})
app.use('/api/attachment', AttachmentController)
app.use('/api/post', PostController)

app.listen(3000, () => {
  console.log("The application is listening on port 3000!");
});
