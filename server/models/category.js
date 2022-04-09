import S from "sequelize";
import { db as sequelize } from "../db";

export class Category extends S.Model {}

Category.init(
  {
    name: { type: S.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: "category",
    timestamps: false,
  }
);
