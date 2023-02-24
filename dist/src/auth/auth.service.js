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
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const account_service_1 = require("../account/account.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AuthService = AuthService_1 = class AuthService {
    constructor(profileService, jwtService) {
        this.profileService = profileService;
        this.jwtService = jwtService;
    }
    async register(profile) {
        const password = await AuthService_1.hashPassword(profile.password);
        return this.profileService.create(Object.assign(Object.assign({}, profile), { password }));
    }
    async login(loginDto) {
        const user = await this.validateUser(loginDto.username, loginDto.password);
        const payload = { username: user.username, id: user.id, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async getProfile(id) {
        const profile = await this.profileService.findOne(id);
        if (!profile)
            throw new common_1.NotFoundException();
        return profile;
    }
    async validateUser(username, pass) {
        const user = await this.profileService.findByUsername(username, true);
        if (!user)
            throw new common_1.NotFoundException(`User with username: '${username}' not existing`);
        const isPasswordMatch = await AuthService_1.comparePasswords(pass, user.password);
        if (!isPasswordMatch)
            throw new common_1.UnauthorizedException();
        return {
            id: user.id,
            username: user.username,
        };
    }
    static async hashPassword(password) {
        return await bcrypt.hash(password, AuthService_1.SALT_ROUND);
    }
    static async comparePasswords(requestPassword, dbHashedPassword) {
        return await bcrypt.compare(requestPassword, dbHashedPassword);
    }
};
AuthService.SALT_ROUND = 10;
AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [account_service_1.AccountService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map