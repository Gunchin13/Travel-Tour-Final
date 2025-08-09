const router = require("express").Router();
const { createTour, getTours } = require("../controllers/tourController");

router.post("/", createTour);
router.get("/", getTours);

module.exports = router;