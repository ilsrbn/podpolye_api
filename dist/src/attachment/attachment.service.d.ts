/// <reference types="multer" />
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import { Attachment } from './entities/attachment.entity';
import { Repository } from 'typeorm';
import { PostService } from '../post/post.service';
export declare class AttachmentService {
    private readonly postService;
    private attachmentRepository;
    constructor(postService: PostService, attachmentRepository: Repository<Attachment>);
    create(filesArray: Array<Express.Multer.File>, postId: number): Promise<void>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAttachmentDto: UpdateAttachmentDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
