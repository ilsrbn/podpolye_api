import express from "express";
import { isLoggedIn } from '../../middlewares/auth';
import {

  createAttachment, removeAttachment
} from "./Attachment.service";

const AttachmentController = express.Router();

AttachmentController.post('/', isLoggedIn, createAttachment)
AttachmentController.delete('/:id', isLoggedIn, removeAttachment)

export default AttachmentController;
