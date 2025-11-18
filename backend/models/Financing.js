const mongoose = require("mongoose");

const FinancingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },  // icon emoji or class
  },
  { timestamps: true }
);

module.exports = mongoose.model("Financing", FinancingSchema);
