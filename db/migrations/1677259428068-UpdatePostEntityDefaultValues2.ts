import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePostEntityDefaultValues21677259428068 implements MigrationInterface {
    name = 'UpdatePostEntityDefaultValues21677259428068'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`event_date\` \`event_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`event_date\` \`event_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
    }

}
