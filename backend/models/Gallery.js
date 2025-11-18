// models/Gallery.js
const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String, // image URL or filename
      required: true,
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("Gallery", GallerySchema);
