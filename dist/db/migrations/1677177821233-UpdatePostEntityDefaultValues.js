"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostEntityDefaultValues1677177821233 = void 0;
class UpdatePostEntityDefaultValues1677177821233 {
    constructor() {
        this.name = 'UpdatePostEntityDefaultValues1677177821233';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`title\` \`title\` varchar(120) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`description\` \`description\` text NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`posted\` \`posted\` tinyint NOT NULL DEFAULT 0`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`posted\` \`posted\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`description\` \`description\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`title\` \`title\` varchar(120) NOT NULL`);
    }
}
exports.UpdatePostEntityDefaultValues1677177821233 = UpdatePostEntityDefaultValues1677177821233;
//# sourceMappingURL=1677177821233-UpdatePostEntityDefaultValues.js.map