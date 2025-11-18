exports.getAllProjects = async (req, res) => {
  try {
    const projects = [
      {
        id: 1,
        title: "New Garage Pad for home out by Strasburg CO.",
        description: "Dirt Dogs Excavating recently finished excavation work...",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        location: "Strasburg, CO",
        date: "2024-07-15",
        category: "Residential",
        readTime: "3 min read"
      },
      {
        id: 2,
        title: "New driveway Loop for a home in Elizabeth, CO",
        description: "Dirt Dogs Excavating recently installed a road base driveway...",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
        location: "Elizabeth, CO",
        date: "2024-06-28",
        category: "Driveway",
        readTime: "4 min read"
      },
      {
        id: 3,
        title: "Pickleball Court Pad Excavation – Littleton, Colorado",
        description: "Dirt Dogs Excavating helped a homeowner in Littleton...",
        image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=400&fit=crop",
        location: "Littleton, CO",
        date: "2024-06-12",
        category: "Recreation",
        readTime: "5 min read"
      },
      {
        id: 4,
        title: "Commercial Site Preparation - Parker Business District",
        description: "Complete site preparation and grading for a commercial project...",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
        location: "Parker, CO",
        date: "2024-05-22",
        category: "Commercial",
        readTime: "6 min read"
      },
      {
        id: 5,
        title: "Basement Foundation Excavation - Castle Rock",
        description: "Precision basement excavation for a custom home...",
        image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=600&h=400&fit=crop",
        location: "Castle Rock, CO",
        date: "2024-05-10",
        category: "Foundation",
        readTime: "4 min read"
      },
      {
        id: 6,
        title: "Ranch Road Construction - Elbert County",
        description: "Built a new access road for a working ranch...",
        image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&h=400&fit=crop",
        location: "Elbert County, CO",
        date: "2024-04-18",
        category: "Infrastructure",
        readTime: "7 min read"
      }
    ];

    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
