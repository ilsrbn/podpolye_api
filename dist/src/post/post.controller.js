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
exports.PostController = exports.AdminPostController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
const create_post_dto_1 = require("./dto/create-post.dto");
const swagger_1 = require("@nestjs/swagger");
const request_decorators_1 = require("../../utils/request.decorators");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const update_post_dto_1 = require("./dto/update-post.dto");
let AdminPostController = class AdminPostController {
    constructor(postService) {
        this.postService = postService;
    }
    create(createPostDto, userId) {
        return this.postService.create(Object.assign(Object.assign({}, createPostDto), { userId }));
    }
    edit(id, editPostDto, userId) {
        return this.postService.edit(+id, Object.assign(Object.assign({}, editPostDto), { userId }));
    }
    findAll(search) {
        return this.postService.findAll(search);
    }
    findOne(id) {
        return this.postService.findOne(+id);
    }
    delete(id) {
        return this.postService.delete(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create post' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/post.entity").Post }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, request_decorators_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto, Number]),
    __metadata("design:returntype", void 0)
], AdminPostController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Edit post' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/post.entity").Post }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, request_decorators_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_post_dto_1.UpdatePostDto, Number]),
    __metadata("design:returntype", void 0)
], AdminPostController.prototype, "edit", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all posts' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/post.entity").Post] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminPostController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get post by ID' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/post.entity").Post }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminPostController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete post by ID' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminPostController.prototype, "delete", null);
AdminPostController = __decorate([
    (0, swagger_1.ApiTags)('Admin Post'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('admin/post'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], AdminPostController);
exports.AdminPostController = AdminPostController;
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    findAll(search) {
        return this.postService.findAll(search);
    }
    findOne(id) {
        return this.postService.findOne(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all posts' }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/post.entity").Post] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get post by ID' }),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/post.entity").Post }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "findOne", null);
PostController = __decorate([
    (0, swagger_1.ApiTags)('Post'),
    (0, common_1.Controller)('post'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map