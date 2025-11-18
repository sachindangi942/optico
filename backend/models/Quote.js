const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    interests: { type: [String], required: true },
    message: { type: String, maxlength: 380 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quote", QuoteSchema);
