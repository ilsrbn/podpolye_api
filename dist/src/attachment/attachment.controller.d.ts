/// <reference types="multer" />
import { AttachmentService } from './attachment.service';
export declare class AttachmentController {
    private readonly attachmentService;
    constructor(attachmentService: AttachmentService);
    create(id: string, files: Array<Express.Multer.File>): Promise<void>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
