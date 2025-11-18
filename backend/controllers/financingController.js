const Financing = require("../models/Financing");

//  GET all financing options
exports.getFinancing = async (req, res) => {
  try {
    const result = await Financing.find().sort({ createdAt: -1 });
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

//  POST: Create financing option (Admin)
exports.createFinancing = async (req, res) => {
  try {
    const newOption = await Financing.create(req.body);
    res.json({ message: "Financing option added", data: newOption });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

//  DELETE option (Admin)
exports.deleteFinancing = async (req, res) => {
  try {
    await Financing.findByIdAndDelete(req.params.id);
    res.json({ message: "Option deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
