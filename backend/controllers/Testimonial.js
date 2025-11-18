exports.Testimonial = async (req, res) => {
  try {
    const data = [
      {
        name: "John Doe",
        quote: "I wanted to take this opportunity to thank you for the magnificent job you did on our driveway...we couldn’t believe our eyes!",
        role: "Homeowner",
        color: "bg-stone-950",
      },
      {
        name: "Jane Smith",
        quote: "You took an absolute 'eye sore' of a driveway and turned it into something beautiful. Thank you for your honesty, good will and the outstanding job you did for us!",
        role: "Property Manager",
        color: "bg-stone-900",
      },
      {
        name: "Mike Johnson",
        quote: "I was amazed with what you did. We are really happy with it. It looks great! Thanks!",
        role: "Contractor",
        color: "bg-stone-950",
      },
    ];

    res.json(data); 
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
