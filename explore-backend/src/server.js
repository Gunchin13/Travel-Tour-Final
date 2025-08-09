const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db"); // ✅ DB bağlantısı
const tourRoute = require("./routes/tourRoute");

// .env faylındakı dəyişənləri oxumaq üçün
dotenv.config();

// MongoDB-yə qoşulmaq
connectDB(); // ✅ Burada çağırırıq

const app = express();

// Middleware-lər
app.use(cors());
app.use(express.json());
app.use("/api/tours", tourRoute);

// Test route
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// Serveri işə salmaq
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`⁠ 🚀 Server is running on port ${PORT}` );
});