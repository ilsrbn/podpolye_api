"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenDto = void 0;
const openapi = require("@nestjs/swagger");
class AccessTokenDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { access_token: { required: true, type: () => String } };
    }
}
exports.AccessTokenDto = AccessTokenDto;
//# sourceMappingURL=accessToken.dto.js.map