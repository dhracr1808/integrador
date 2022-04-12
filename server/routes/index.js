import { Router } from "express";
const router = Router();

import routerProperty from "./Property";
import routerUser from "./user";
import roterCategory from "./category";
import routerFavorites from "./favorite";

router.use("/property", routerProperty);
router.use("/users", routerUser);
router.use("/categories", roterCategory);
router.use("/favorites", routerFavorites);

router.use("/*", (req, res) => {
  res.sendStatus(404);
});

export default router;
