import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePostEntityDefaultValues31677259473473 implements MigrationInterface {
    name = 'UpdatePostEntityDefaultValues31677259473473'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`description\` \`description\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`event_date\` \`event_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`event_date\` \`event_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`description\` \`description\` text NOT NULL DEFAULT ''''`);
    }

}
