const express = require("express");
const router = express.Router();
const {
  getFinancing,
  createFinancing,
  deleteFinancing,
} = require("../controllers/financingController");

// User route
router.get("/all", getFinancing);

// Admin routes
router.post("/create", createFinancing);
router.delete("/delete/:id", deleteFinancing);

module.exports = router;
