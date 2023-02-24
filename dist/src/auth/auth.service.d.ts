import { AccountService } from 'src/account/account.service';
import { JwtService } from '@nestjs/jwt';
import { CreateAccountDto } from 'src/account/dto/create-account.dto';
import { LoginDto } from './dto/login.dto';
import { Account } from 'src/account/entities/account.entity';
import { AccessTokenDto } from './dto/accessToken.dto';
export declare class AuthService {
    private readonly profileService;
    private readonly jwtService;
    constructor(profileService: AccountService, jwtService: JwtService);
    register(profile: CreateAccountDto): Promise<Account>;
    login(loginDto: LoginDto): Promise<AccessTokenDto>;
    getProfile(id: number): Promise<Account>;
    static SALT_ROUND: number;
    validateUser(username: string, pass: string): Promise<any>;
    static hashPassword(password: string): Promise<string>;
    static comparePasswords(requestPassword: string, dbHashedPassword: string): Promise<boolean>;
}
