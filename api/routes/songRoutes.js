import express from "express";
import { getMyProfile, getProfile, login, logout, register,addBio } from "../controllers/songs.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();



// router.get("getAll", getAll);
router.post("/login", login);
router.post("/update",isAuthenticated,addBio)
router.get("/logout",isAuthenticated, logout);

router.get("/me", isAuthenticated, getMyProfile);
router.get("/:id",getAll)

export default router;