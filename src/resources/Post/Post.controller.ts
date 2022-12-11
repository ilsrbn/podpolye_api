import express from "express";
import { isLoggedIn } from "../../middlewares/auth";
import {
  createPost, deletePost, editPost, getAllPosts, getPostBySlug, setCover
} from "./Post.service";

const PostController = express.Router();

PostController.get('/', getAllPosts)
PostController.get('/:slug', getPostBySlug)
PostController.post('/', isLoggedIn, createPost)
PostController.put('/:postId', isLoggedIn, editPost)
PostController.post('/cover', isLoggedIn, setCover)
PostController.delete('/:id', isLoggedIn, deletePost)

export default PostController;
