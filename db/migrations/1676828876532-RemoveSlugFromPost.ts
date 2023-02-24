import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveSlugFromPost1676828876532 implements MigrationInterface {
    name = 'RemoveSlugFromPost1676828876532'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post\` DROP COLUMN \`slug\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post\` ADD \`slug\` varchar(120) NOT NULL`);
    }

}
