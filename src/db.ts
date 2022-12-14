import { DataSource } from "typeorm";
import 'reflect-metadata'
import dotenv from 'dotenv'
dotenv.config()
const env = process.env
const port = parseInt(env.PORT || '3307')
export default new DataSource({
  type: 'mysql',
  host: '172.18.0.1',
  port: 3307,
  username: 'padmin',
  password: 'aloha728',
  database: "podpolye",
  entities: ["dist/resources/*/*.model.js"],
  driver: {},
  // logging: true,
  synchronize: true,
});
