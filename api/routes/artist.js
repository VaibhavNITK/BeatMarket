import express from "express";
import { getMyProfile, getProfile, login, logout, register,addBio,getAll } from "../controllers/artist.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();



router.post("/new", register);
router.post("/login", login);
router.post("/update",isAuthenticated,addBio)
router.get("/logout",isAuthenticated, logout);
router.get("/all",isAuthenticated, getAll)
router.get("/me", isAuthenticated, getMyProfile);
router.get("/:id",getProfile)

export default router;