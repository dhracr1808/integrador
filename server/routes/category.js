import { Router } from "express";
import { Category } from "../models";

const router = Router();

router.get("/", async (req, res) => {
  const { categoria } = req.query;
  if (!categoria) return res.send(await Category.findAll());
  const similar = Category.build();
  res.send(await similar.similar(categoria));
});

router.get("/search", async (req, res) => {
  const data = await Category.findAll();
  res.send(data.sort((a, b) => (a.name < b.name ? 1 : -1)));
});

router.post("/", async (req, res) => {
  res.send(await Category.create(req.body));
});

export default router;
