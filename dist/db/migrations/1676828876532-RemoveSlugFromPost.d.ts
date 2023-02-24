import { MigrationInterface, QueryRunner } from "typeorm";
export declare class RemoveSlugFromPost1676828876532 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
