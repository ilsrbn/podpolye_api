import { Post } from 'src/post/entities/post.entity';
export declare class Account {
    id: number;
    username: string;
    password: string;
    posts: Post[];
}
