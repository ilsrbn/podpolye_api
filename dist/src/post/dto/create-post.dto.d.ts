export declare class CreatePostDto {
    title?: string;
    description?: string;
    posted?: boolean;
    event_date?: string;
}
export interface CreatePost extends CreatePostDto {
    userId: number;
}
