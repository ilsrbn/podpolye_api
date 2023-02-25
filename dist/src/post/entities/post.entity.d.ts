import { Account } from 'src/account/entities/account.entity';
import { Attachment } from 'src/attachment/entities/attachment.entity';
export declare class Post {
    id: number;
    title: string;
    description?: string;
    event_date: string;
    owner: Account;
    ownerId: number;
    attachments: Attachment[];
    created_at: Date;
    updated_at: Date;
    posted: boolean;
}
