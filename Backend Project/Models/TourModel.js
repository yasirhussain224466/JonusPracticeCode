const mongoose = require("mongoose");

const TourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a Name"],
    unique: true,
  },
  // locations: [String],
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "A Tour must have a Price"],
  },
  priceDiscount: {
    type: Number,
  },
  duration: {
    type: Number,
    required: [true, "A Tour must have a duration"],
  },
  maxGroupSize: {
    type: Number,
    required: [true, "A Tour must have a max Group Size"],
  },
  difficulty: {
    type: String,
    required: [true, "A Tour must have a difficulty"],
  },
  summary: {
    type: String,
    trim: true,
    required: [true, "A tour must have a Summary"],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, "A tour must have a Cover Image"],
  },
  image: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDate: [Date],
  guides: [String]
})

// Object Model
const Tour = mongoose.model("Tour", TourSchema);

module.exports = Tour;
