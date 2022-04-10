import S from "sequelize";
import { db as sequelize } from "../db";

export class Category extends S.Model {
  similar(value) {
    return Category.findAll({ where: { name: { [S.Op.not]: value } } });
  }
}

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
