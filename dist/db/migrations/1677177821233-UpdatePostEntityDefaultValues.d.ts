import { MigrationInterface, QueryRunner } from "typeorm";
export declare class UpdatePostEntityDefaultValues1677177821233 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
