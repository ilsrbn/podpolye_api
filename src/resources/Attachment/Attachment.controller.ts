import express from "express";
import { isLoggedIn } from '../../middlewares/auth';
import {

  createAttachment, removeAttachment
} from "./Attachment.service";

const AttachmentController = express.Router();

AttachmentController.post('/', createAttachment)
AttachmentController.delete('/:id', removeAttachment)

export default AttachmentController;
