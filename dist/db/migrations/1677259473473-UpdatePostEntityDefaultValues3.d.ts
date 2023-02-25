import { MigrationInterface, QueryRunner } from "typeorm";
export declare class UpdatePostEntityDefaultValues31677259473473 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
