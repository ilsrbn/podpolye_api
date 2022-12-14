import {DataSource, DataSourceOptions} from "typeorm";
import 'reflect-metadata'
import dotenv from 'dotenv'
dotenv.config()
const env = process.env
const port = parseInt(env.DB_PORT || '3307')
const db = "mysql";
export default new DataSource({
  type: db,
  host: env.DB_HOST,
  port: port,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  entities: ["dist/resources/*/*.model.js"],
  driver: {},
  // logging: true,
  synchronize: true,
});
