const { Testimonial } = require("../controllers/Testimonial");

// routes/testimonialRoute.js
const router = require("express").Router();


router.get("/",Testimonial);

module.exports = router;
