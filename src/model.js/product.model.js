const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  originalPrice: { type: Number, required: true },
  regularPrice: { type: Number, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  features: { type: Array, required: true },
  popularity: { type: Boolean, required: true },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
