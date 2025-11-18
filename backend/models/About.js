const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
},{ timestamps: true });

module.exports = mongoose.model("About", AboutSchema);
