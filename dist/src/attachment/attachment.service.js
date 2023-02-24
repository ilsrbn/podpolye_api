"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const attachment_entity_1 = require("./entities/attachment.entity");
const typeorm_2 = require("typeorm");
const post_service_1 = require("../post/post.service");
const dotenv = require("dotenv");
const node_fs_1 = require("node:fs");
dotenv.config();
let AttachmentService = class AttachmentService {
    constructor(postService, attachmentRepository) {
        this.postService = postService;
        this.attachmentRepository = attachmentRepository;
    }
    async create(filesArray, postId) {
        const post = await this.postService.findOne(postId);
        const domainUrl = process.env.API_DOMAIN || 'localhost:3000';
        for (const file of filesArray) {
            const fileUrl = domainUrl + '/' + file.path;
            const filePath = file.path;
            const attachment = this.attachmentRepository.create({
                post,
                file: filePath,
                file_url: fileUrl,
            });
            await this.attachmentRepository.save(attachment);
        }
    }
    findAll() {
        return `This action returns all attachment`;
    }
    findOne(id) {
        return `This action returns a #${id} attachment`;
    }
    update(id, updateAttachmentDto) {
        return `This action updates a #${id} attachment`;
    }
    async remove(id) {
        const file = await this.attachmentRepository.findOneOrFail({
            where: { id },
        });
        (0, node_fs_1.unlink)(file.file, (err) => {
            if (err)
                throw err;
            console.log(`${file.file} was deleted`);
        });
        return await this.attachmentRepository.delete({ id });
    }
};
AttachmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(attachment_entity_1.Attachment)),
    __metadata("design:paramtypes", [post_service_1.PostService,
        typeorm_2.Repository])
], AttachmentService);
exports.AttachmentService = AttachmentService;
//# sourceMappingURL=attachment.service.js.map