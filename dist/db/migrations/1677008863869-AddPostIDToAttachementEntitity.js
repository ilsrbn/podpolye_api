"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPostIDToAttachementEntitity1677008863869 = void 0;
class AddPostIDToAttachementEntitity1677008863869 {
    constructor() {
        this.name = 'AddPostIDToAttachementEntitity1677008863869';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`attachment\` DROP FOREIGN KEY \`FK_09f5bc45017ed4f20ad606985a0\``);
        await queryRunner.query(`ALTER TABLE \`attachment\` CHANGE \`postId\` \`postId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`post\` DROP FOREIGN KEY \`FK_4490d00e1925ca046a1f52ddf04\``);
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`ownerId\` \`ownerId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`attachment\` ADD CONSTRAINT \`FK_09f5bc45017ed4f20ad606985a0\` FOREIGN KEY (\`postId\`) REFERENCES \`post\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`post\` ADD CONSTRAINT \`FK_4490d00e1925ca046a1f52ddf04\` FOREIGN KEY (\`ownerId\`) REFERENCES \`account\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`post\` DROP FOREIGN KEY \`FK_4490d00e1925ca046a1f52ddf04\``);
        await queryRunner.query(`ALTER TABLE \`attachment\` DROP FOREIGN KEY \`FK_09f5bc45017ed4f20ad606985a0\``);
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`ownerId\` \`ownerId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`post\` ADD CONSTRAINT \`FK_4490d00e1925ca046a1f52ddf04\` FOREIGN KEY (\`ownerId\`) REFERENCES \`account\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`attachment\` CHANGE \`postId\` \`postId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`attachment\` ADD CONSTRAINT \`FK_09f5bc45017ed4f20ad606985a0\` FOREIGN KEY (\`postId\`) REFERENCES \`post\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
}
exports.AddPostIDToAttachementEntitity1677008863869 = AddPostIDToAttachementEntitity1677008863869;
//# sourceMappingURL=1677008863869-AddPostIDToAttachementEntitity.js.map