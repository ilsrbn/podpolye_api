"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostEntityDefaultValues21677259428068 = void 0;
class UpdatePostEntityDefaultValues21677259428068 {
    constructor() {
        this.name = 'UpdatePostEntityDefaultValues21677259428068';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`event_date\` \`event_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`event_date\` \`event_date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
    }
}
exports.UpdatePostEntityDefaultValues21677259428068 = UpdatePostEntityDefaultValues21677259428068;
//# sourceMappingURL=1677259428068-UpdatePostEntityDefaultValues2.js.map