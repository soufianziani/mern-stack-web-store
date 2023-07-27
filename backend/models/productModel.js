
const mongoose = require("mongoose");
//use the schema
const Schema = mongoose.Schema

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("Product", productSchema);




