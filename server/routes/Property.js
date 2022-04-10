import { Router } from "express";
import {
  createProperty,
  getProperties,
  deleteProperty,
  getProperty,
} from "../controllers";
const router = Router();

router.get("/", getProperties);
router.get("/:id", getProperty);

router.post("/", createProperty);

router.delete("/:id", deleteProperty);

export default router;
