import { AuthService } from './auth.service';
import { CreateAccountDto } from 'src/account/dto/create-account.dto';
import { LoginDto } from './dto/login.dto';
import { Account } from 'src/account/entities/account.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createAccountDto: CreateAccountDto): Promise<Account>;
    login(loginDto: LoginDto): Promise<import("./dto/accessToken.dto").AccessTokenDto>;
    getProfile(userId: number): Promise<Account>;
}
