const express = require("express");
const getCharById = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const userLogin = require("../controllers/login");
const router = express.Router()


router.get("/character/:id", getCharById);
router.get("/login", userLogin);
router.post("/fav",postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;