const Gallery = require("../models/Gallery");

// controllers/galleryController.js

exports.getGallery = async (req, res) => {
  try {
    const galleryData = {
      categories: [
        "All",
        "Horse Arenas",
        "Footing",
        "Barn & Building Pads",
        "Driveways",
        "Erosion Matting",
        "Finish Grade",
        "Foundations",
        "Road Base",
        "Trenching",
        "Earth Moving",
        "Rock Crusher",
        "Parking Lot",
        "Horse Arena",
        "Excavation",
        "Flood Control",
        "Ditch Excavation",
        "Road Grading",
        "Asphalt"
      ],

      images: [
        {
          url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=60",
          category: "Excavation"
        },
        {
          url: "https://images.unsplash.com/photo-1597005921173-b1dd7c10a26b",
          category: "Road Grading"
        },
        {
          url: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=60",
          category: "Earth Moving"
        }
      ]
    };

    res.json(galleryData);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


exports.createGallery = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "Images are required" });
    }

    const { category } = req.body;

    if (!category) {
      return res.status(400).json({ message: "Category is required" });
    }

    const images = req.files.map((file) => file.filename);

    const newGallery = await Gallery.create({
      category,
      images,
    });

    res.json({
      message: "Gallery uploaded successfully",
      gallery: newGallery,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};


// DELETE GALLERY ITEM (OPTIONAL)
exports.deleteGalleryItem = async (req, res) => {
  try {
    const galleryId = req.params.id;

    const deleted = await Gallery.findByIdAndDelete(galleryId);

    if (!deleted) {
      return res.status(404).json({ message: "Gallery item not found" });
    }

    res.json({ message: "Gallery item deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
