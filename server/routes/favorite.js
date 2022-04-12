import { Router } from "express";
import { favorites, addFavoriteProp, removeFavorite } from "../controllers";
import { auth } from "./../config/auth";
const { isAuthenticated, isAdmin } = auth;
const router = Router();

router.get("/user", isAuthenticated, favorites);
router.put("/", isAuthenticated, addFavoriteProp);
router.delete("/", removeFavorite);

export default router;
