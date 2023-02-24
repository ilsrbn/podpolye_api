import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.MYSQL_USERNAME || 'admin';
const PASSWORD = process.env.MYSQL_PASSWORD || 'admin';
const DATABASE = process.env.MYSQL_DATABASE || 'admin';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  username: USERNAME,
  password: PASSWORD,
  database: DATABASE,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
