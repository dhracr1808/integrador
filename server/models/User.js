import S from "sequelize";
import { db as sequelize } from "../db";
import bcrypt from "bcrypt";

export class User extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    username: { type: S.STRING, allowNull: false },
    email: { type: S.STRING, allowNull: false },
    password: { type: S.STRING, allowNull: false },
    salt: { type: S.STRING },
  },

  { sequelize, modelName: "users" }
);

User.addHook("beforeCreate", async (user) => {
  const salt = await bcrypt.genSalt(16);
  const hash = await user.hash(user.password, salt);
  user.password = hash;
  user.salt = salt;
});
