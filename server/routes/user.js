import { Router } from "express";
import passport from "passport";
import { getUsers, newUser } from "../controllers";
import { User } from "../models";
import { auth } from "./../config/auth";
const { isAuthenticated, isAdmin } = auth;

const router = Router();

router.get("/", isAuthenticated, getUsers);

router.post("/", newUser);

router.post("/loggin", passport.authenticate("local"), (req, res) => {
  if (!req.user) return res.sendStatus(401);
  const { id, username, email } = req.user;
  res.send({ id, username, email });
});

export default router;
