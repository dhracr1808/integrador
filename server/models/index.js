import { Property } from "./Property";
import { User } from "./User";
import { Category } from "./category";

Property.belongsToMany(User, { as: "favorites", through: "pro_favorite" });
User.belongsToMany(Property, { as: "favorites", through: "pro_favorite" });

export { Property, User, Category };
