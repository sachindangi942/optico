const { getServices } = require("../controllers/servicesController");

const router = require("express").Router();


router.get("/",getServices);

module.exports = router;
