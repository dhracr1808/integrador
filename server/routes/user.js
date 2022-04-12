import { Router } from "express";
import passport from "passport";
import { getUsers, isAuth, loggin, Logout, newUser } from "../controllers";
import { auth } from "./../config/auth";
const { isAuthenticated, isAdmin } = auth;

const router = Router();

router.get("/", isAuthenticated, getUsers);
router.get("/auth", isAuth);
router.post("/", newUser);
router.post("/logout", Logout);
router.post("/loggin", passport.authenticate("local"), loggin);

export default router;
