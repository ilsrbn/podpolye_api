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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const post_entity_1 = require("./entities/post.entity");
const lodash_1 = require("lodash");
const node_fs_1 = require("node:fs");
let PostService = class PostService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async create(createPost) {
        if (createPost.title)
            await this.findDuplicate(createPost.userId, createPost.title);
        const post = this.postRepository.create(Object.assign(Object.assign({}, createPost), { ownerId: createPost.userId }));
        await this.postRepository.save(post);
        return post;
    }
    async edit(postId, editPost) {
        const post = await this.postRepository.findOneOrFail({
            where: {
                id: postId,
                ownerId: editPost.userId,
            },
        });
        if (!post)
            throw new common_1.NotFoundException();
        if (editPost.title)
            post.title = editPost.title;
        if (editPost.posted)
            post.posted = editPost.posted;
        if (editPost.description)
            post.description = editPost.description;
        if (editPost.event_date)
            post.event_date = editPost.event_date;
        await this.postRepository.save(post);
        return post;
    }
    async findAll(search) {
        let posts;
        if (!(0, lodash_1.isEmpty)(search)) {
            posts = await this.postRepository
                .createQueryBuilder('post')
                .select()
                .where(`MATCH(title) AGAINST ('+${search}*' IN BOOLEAN MODE)`)
                .orWhere(`MATCH(description) AGAINST ('+${search}*' IN BOOLEAN MODE)`)
                .leftJoinAndSelect('post.attachments', 'attachments')
                .orderBy('event_date', 'DESC')
                .getMany();
        }
        else
            posts = await this.postRepository.find();
        return posts;
    }
    findOne(id) {
        return this.postRepository.findOneOrFail({
            where: {
                id,
            },
        });
    }
    async delete(id) {
        const { attachments } = await this.postRepository.findOneOrFail({
            where: { id },
        });
        for (const attachment of attachments) {
            (0, node_fs_1.unlink)(attachment.file, (err) => {
                if (err)
                    throw err;
                console.log(`${attachment.file} deleted!`);
            });
        }
        return this.postRepository.delete({
            id,
        });
    }
    async findDuplicate(userId, postTitle, error = true) {
        const post = await this.postRepository.findOne({
            where: {
                ownerId: userId,
                title: postTitle,
            },
        });
        if (post && error) {
            throw new common_1.BadRequestException(`Post with title ${postTitle} already exists`);
        }
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map