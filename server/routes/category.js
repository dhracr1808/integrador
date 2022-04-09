import { Router } from "express";
import { Category } from "../models";

const router = Router();

router.get("/", async (req, res) => {
  res.send(await Category.findAll());
});

router.post("/", async (req, res) => {
  res.send(await Category.create(req.body));
});

export default router;
