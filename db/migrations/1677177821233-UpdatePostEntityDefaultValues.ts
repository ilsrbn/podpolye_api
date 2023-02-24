import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePostEntityDefaultValues1677177821233 implements MigrationInterface {
    name = 'UpdatePostEntityDefaultValues1677177821233'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`title\` \`title\` varchar(120) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`description\` \`description\` text NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`posted\` \`posted\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`posted\` \`posted\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`description\` \`description\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`title\` \`title\` varchar(120) NOT NULL`);
    }

}
