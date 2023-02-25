import { MigrationInterface, QueryRunner } from "typeorm";
export declare class UpdatePostEntityDefaultValues21677259428068 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
