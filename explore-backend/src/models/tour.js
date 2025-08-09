const { Schema, model } = require("mongoose");

const tourSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = model("Tour", tourSchema);