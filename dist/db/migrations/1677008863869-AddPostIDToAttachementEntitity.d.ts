import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddPostIDToAttachementEntitity1677008863869 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
