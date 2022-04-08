import { Router } from "express";
import { createProperty, getProperties } from "../controllers";
const router = Router();

router.get("/", getProperties);

router.post("/", createProperty);

export default router;
