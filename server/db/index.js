import Sequelize from "sequelize";

export const db = new Sequelize("propiedades", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});
