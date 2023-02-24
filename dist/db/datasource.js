"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
dotenv.config();
const USERNAME = process.env.MYSQL_USERNAME || 'admin';
const PASSWORD = process.env.MYSQL_PASSWORD || 'admin';
const DATABASE = process.env.MYSQL_DATABASE || 'admin';
const DB_TYPE = process.env.MYSQL_DATABASE_TYPE || 'mysql';
console.log({
    type: DB_TYPE,
    host: 'localhost',
    port: 3306,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
});
exports.dataSourceOptions = {
    type: DB_TYPE,
    host: '127.0.0.1',
    port: 3306,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=datasource.js.map