import { Post } from 'src/post/entities/post.entity';
export declare class Attachment {
    id: number;
    file_url: string;
    file: string;
    post: Post;
    postId: number;
    created_at: Date;
    updated_at: Date;
}
