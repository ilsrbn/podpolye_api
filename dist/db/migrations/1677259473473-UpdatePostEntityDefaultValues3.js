"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostEntityDefaultValues31677259473473 = void 0;
class UpdatePostEntityDefaultValues31677259473473 {
    constructor() {
        this.name = 'UpdatePostEntityDefaultValues31677259473473';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`description\` \`description\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`event_date\` \`event_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`event_date\` \`event_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`description\` \`description\` text NOT NULL DEFAULT ''''`);
    }
}
exports.UpdatePostEntityDefaultValues31677259473473 = UpdatePostEntityDefaultValues31677259473473;
//# sourceMappingURL=1677259473473-UpdatePostEntityDefaultValues3.js.map