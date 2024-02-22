const express = require("express");
const { register, login, updateBio } = require("../controllers/artistController.js");
const { protect } = require("../middlewares/authMiddleware.js");


const router = express.Router();

router.post("/signup", register);
router.post("/login", login);
router.post("/updatebio", protect , updateBio);

module.exports = router;