"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptoonNullable1677317121321 = void 0;
class DescriptoonNullable1677317121321 {
    constructor() {
        this.name = 'DescriptoonNullable1677317121321';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`event_date\` \`event_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`event_date\` \`event_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`description\` \`description\` text NOT NULL`);
    }
}
exports.DescriptoonNullable1677317121321 = DescriptoonNullable1677317121321;
//# sourceMappingURL=1677317121321-DescriptoonNullable.js.map