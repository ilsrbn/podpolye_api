"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditPost = exports.UpdatePostDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_post_dto_1 = require("./create-post.dto");
class UpdatePostDto extends (0, mapped_types_1.PartialType)(create_post_dto_1.CreatePostDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdatePostDto = UpdatePostDto;
class EditPost extends UpdatePostDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { userId: { required: true, type: () => Number } };
    }
}
exports.EditPost = EditPost;
//# sourceMappingURL=update-post.dto.js.map