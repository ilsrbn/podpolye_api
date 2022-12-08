import { DataSource } from "typeorm";
import 'reflect-metadata'
import dotenv from 'dotenv'
dotenv.config()
const env = process.env
const port = parseInt(env.PORT || '3306')
export default new DataSource({
  type: 'mysql',
  host: env.DB_HOST,
  port,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: "podpolye",
  entities: ["dist/resources/*/*.model.js"],
  // logging: true,
  synchronize: true,
});
