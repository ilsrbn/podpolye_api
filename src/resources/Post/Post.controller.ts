import express from "express";
import { isLoggedIn } from "../../middlewares/auth";
import {
  createPost, deletePost, getAllPosts, getPostById
} from "./Post.service";

const PostController = express.Router();

PostController.get('/', getAllPosts)
PostController.get('/:id', getPostById)
PostController.post('/', createPost)
PostController.delete('/:id', deletePost)

export default PostController;
