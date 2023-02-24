"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveSlugFromPost1676828876532 = void 0;
class RemoveSlugFromPost1676828876532 {
    constructor() {
        this.name = 'RemoveSlugFromPost1676828876532';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`post\` DROP COLUMN \`slug\``);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`post\` ADD \`slug\` varchar(120) NOT NULL`);
    }
}
exports.RemoveSlugFromPost1676828876532 = RemoveSlugFromPost1676828876532;
//# sourceMappingURL=1676828876532-RemoveSlugFromPost.js.map