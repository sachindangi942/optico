exports.getServices = async (req, res) => {
  try {
    const hardcodedServices = [
      {
        _id: "1",
        title: "Excavation Service",
        banners: [
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=60"
        ]
      },
      {
        _id: "2",
        title: "Land Clearing",
        banners: [
          "https://images.pexels.com/photos/126733/pexels-photo-126733.jpeg"
        ]
      },
      {
        _id: "3",
        title: "Road Construction",
        banners: [
          "https://images.pexels.com/photos/209282/pexels-photo-209282.jpeg"
        ]
      }
    ];

    res.json(hardcodedServices);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
