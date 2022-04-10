import Sequelize from "sequelize";
import { DATABASE } from "./../config/config";
export const db = new Sequelize(DATABASE, null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});
