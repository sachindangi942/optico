const router = require("express").Router();
const { getGallery, createGallery } = require("../controllers/galleryController");

router.get("/", getGallery);
router.post("/create",createGallery);

module.exports = router;


