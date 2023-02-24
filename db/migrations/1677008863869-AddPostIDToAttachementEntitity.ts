import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPostIDToAttachementEntitity1677008863869 implements MigrationInterface {
    name = 'AddPostIDToAttachementEntitity1677008863869'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`attachment\` DROP FOREIGN KEY \`FK_09f5bc45017ed4f20ad606985a0\``);
        await queryRunner.query(`ALTER TABLE \`attachment\` CHANGE \`postId\` \`postId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`post\` DROP FOREIGN KEY \`FK_4490d00e1925ca046a1f52ddf04\``);
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`ownerId\` \`ownerId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`attachment\` ADD CONSTRAINT \`FK_09f5bc45017ed4f20ad606985a0\` FOREIGN KEY (\`postId\`) REFERENCES \`post\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`post\` ADD CONSTRAINT \`FK_4490d00e1925ca046a1f52ddf04\` FOREIGN KEY (\`ownerId\`) REFERENCES \`account\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post\` DROP FOREIGN KEY \`FK_4490d00e1925ca046a1f52ddf04\``);
        await queryRunner.query(`ALTER TABLE \`attachment\` DROP FOREIGN KEY \`FK_09f5bc45017ed4f20ad606985a0\``);
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`ownerId\` \`ownerId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`post\` ADD CONSTRAINT \`FK_4490d00e1925ca046a1f52ddf04\` FOREIGN KEY (\`ownerId\`) REFERENCES \`account\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`attachment\` CHANGE \`postId\` \`postId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`attachment\` ADD CONSTRAINT \`FK_09f5bc45017ed4f20ad606985a0\` FOREIGN KEY (\`postId\`) REFERENCES \`post\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
