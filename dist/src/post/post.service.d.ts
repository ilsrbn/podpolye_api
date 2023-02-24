import { Repository } from 'typeorm';
import { CreatePost } from './dto/create-post.dto';
import { Post } from './entities/post.entity';
import { EditPost } from './dto/update-post.dto';
export declare class PostService {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    create(createPost: CreatePost): Promise<Post>;
    edit(postId: number, editPost: EditPost): Promise<Post>;
    findAll(search?: string): Promise<Post[]>;
    findOne(id: number): Promise<Post>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    private findDuplicate;
}
