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
    username: { type: S.STRING(20), allowNull: false },

    email: {
      type: S.STRING(50),
      allowNull: false,
      validate: {
        isEmail: { msg: "Email no valido" },
        notEmpty: { msg: "Ingrese un Email" },
      },
      unique: { msg: "El email ya está registrado" },
    },

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
