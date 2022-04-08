import { Router } from "express";
import passport from "passport";
import { getUsers } from "../controllers";
import { User } from "../models/User";
import { auth } from "./../config/auth";
const { isAuthenticated, isAdmin } = auth;

const router = Router();

router.get("/", isAdmin, getUsers);

router.post("/", async (req, res) => {
  const newUser = User.create(req.body);
  res.send(newUser);
});

router.post("/loggin", passport.authenticate("local"), (req, res) => {
  if (!req.user) return res.sendStatus(401);
  const { id, username, email } = req.user;
  res.send({ id, username, email });
});

export default router;
