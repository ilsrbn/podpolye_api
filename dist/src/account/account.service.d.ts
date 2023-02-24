import { CreateAccountDto } from './dto/create-account.dto';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity';
export declare class AccountService {
    private accountRepository;
    constructor(accountRepository: Repository<Account>);
    create(createAccountDto: CreateAccountDto): Promise<Account>;
    findAll(): Promise<Account[]>;
    findOne(id: number): Promise<Account | null>;
    findByUsername(username: string, withPassword?: boolean): Promise<Account | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
