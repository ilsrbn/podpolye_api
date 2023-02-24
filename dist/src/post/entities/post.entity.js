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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const account_entity_1 = require("../../account/entities/account.entity");
const attachment_entity_1 = require("../../attachment/entities/attachment.entity");
let Post = class Post {
    constructor() {
        this.posted = false;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, title: { required: true, type: () => String }, description: { required: true, type: () => String }, event_date: { required: true, type: () => String }, owner: { required: true, type: () => require("../../account/entities/account.entity").Account }, ownerId: { required: true, type: () => Number }, attachments: { required: true, type: () => [require("../../attachment/entities/attachment.entity").Attachment] }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date }, posted: { required: true, type: () => Object, default: false } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Index)({ fulltext: true }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 120, default: '' }),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Index)({ fulltext: true }),
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Post.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", String)
], Post.prototype, "event_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => account_entity_1.Account, (owner) => owner.posts, { nullable: false }),
    __metadata("design:type", account_entity_1.Account)
], Post.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Post.prototype, "ownerId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => attachment_entity_1.Attachment, (attachment) => attachment.post, {
        cascade: ['remove'],
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Post.prototype, "attachments", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Post.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Post.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Object)
], Post.prototype, "posted", void 0);
Post = __decorate([
    (0, typeorm_1.Entity)()
], Post);
exports.Post = Post;
//# sourceMappingURL=post.entity.js.map