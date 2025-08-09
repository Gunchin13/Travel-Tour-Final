const Tour = require("../models/tour");
// POST /api/tours  -> yeni tur yarat
exports.createTour = async (req, res) => {
  try {
    const tour = await Tour.create({ title: req.body.title });
    res.status(201).json(tour);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET /api/tours   -> bütün turları getir
exports.getTours = async (_req, res) => {
  try {
    const tours = await Tour.find().sort({ createdAt: -1 });
    res.json(tours);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
