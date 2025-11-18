const express = require("express");
const router = express.Router();
const { submitQuote, getAllQuotes } = require("../controllers/quoteController");

// POST new request
router.post("/submit", submitQuote);

// GET all requests (admin)
router.get("/all", getAllQuotes);

module.exports = router;
