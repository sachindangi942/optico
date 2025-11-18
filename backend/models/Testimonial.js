const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    name: String,
    quote: String,
    role: String,
    color: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Testimonial", testimonialSchema);
