import { Router } from "express";
const router = Router();

import routerProperty from "./Property";
import routerUser from "./user";
import roterCategory from "./category";
import routerFavorites from "./favorite";

router.use("/property", routerProperty);
router.use("/users", routerUser);
router.use("/category", roterCategory);
router.use("/favorite", routerFavorites);

router.use("/*", (req, res) => {
  res.sendStatus(404);
});

export default router;
