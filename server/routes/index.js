import { Router } from "express";
const router = Router();

import routerProperty from "./Property";
import routerUser from "./user";

router.use("/property", routerProperty);
router.use("/users", routerUser);

export default router;
