const About = require("../models/About");

// Create or Update About Data
exports.createOrUpdateAbout = async (req, res) => {
  try {
    let about = await About.findOne();

    if (about) {
      // Update
      about.title = req.body.title;
      about.description = req.body.description;
      about.experience = req.body.experience;
      about.mission = req.body.mission;

      await about.save();
      return res.json({ message: "About updated", about });
    }

    // Create new
    const newAbout = await About.create(req.body);
    res.json({ message: "About created", about: newAbout });
  } catch (err) {
    res.status(500).json({ error: "Failed to save about data" });
  }
};

// Get About Data
exports.getAbout = async (req, res) => {
  try {
    const about = await About.findOne();

    if (!about) {
      return res.json({
        title: "About Our Company",
        description:
          "We are committed to delivering high-quality construction work with honesty, dedication, and perfection.",
        experience: "20+ Years of Experience",
        mission: "Our mission is to bring your vision to life with quality results."
      });
    }

    res.json(about);
  } catch (err) {
    res.status(500).json({ error: "Failed to load about data" });
  }
};
