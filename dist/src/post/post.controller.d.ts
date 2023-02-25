import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class AdminPostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto, userId: number): Promise<import("./entities/post.entity").Post>;
    edit(id: string, editPostDto: UpdatePostDto, userId: number): Promise<import("./entities/post.entity").Post>;
    findAll(search?: string): Promise<import("./entities/post.entity").Post[]>;
    findOne(id: string): Promise<import("./entities/post.entity").Post>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    findAll(search?: string): Promise<import("./entities/post.entity").Post[]>;
    findOne(id: string): Promise<import("./entities/post.entity").Post>;
}
