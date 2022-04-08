import S from "sequelize";
import { db as sequelize } from "./../db";
export class Property extends S.Model {}

Property.init(
  {
    name: { type: S.STRING, allowNull: false },
    description: { type: S.TEXT, allowNull: false },
    price: { type: S.DOUBLE, allowNull: false },
    location: { type: S.STRING, allowNull: false },
    image: { type: S.STRING },
    available: { type: S.BOOLEAN, defaultValue: true },
    truncateDescription: {
      type: S.VIRTUAL,
      get() {
        return this.description.slice(0, 20) + "...";
      },
    },
  },
  { sequelize, modelName: "property" }
);

Property.addHook("beforeCreate", (property) => {
  property.name = property.name + (property.available ? "" : " no disponible");
});
