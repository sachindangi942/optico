const Quote = require("../models/Quote");

// Submit quote request
exports.submitQuote = async (req, res) => {
  console.log(req.body)
  try {
    const newQuote = await Quote.create(req.body);

    res.json({
      message: "Quote request submitted successfully!",
      quote: newQuote,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all quote requests (for admin)
exports.getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
