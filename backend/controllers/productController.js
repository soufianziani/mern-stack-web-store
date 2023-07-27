const Product = require("../models/productModel")
const mongoose = require("mongoose")
//all
const getProducts = async (req, res) => {
  const products = await Product.find({}).sort({ createdAt: -1 })
  res.status(200).json(products)
}
//only one
const getProduct = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid' })
  }
  const product = await Product.findById(id)
  if (!product) {
    return res.status(404).json({ error: 'no such product' })
  }
  res.status(200).json(product)

}
//new
const createProduct = async (req, res) => {
  const { title, image, price } = req.body
  try {
    const product = await Product.create({
      title, image, price
    })
    res.status(200).json(product)
  } catch (error) {
    console.log(error)
  }
}
//delete
const deleteProduct = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid' })
  }
  const product = await Product.findOneAndDelete({ _id: id })
  if (!product) {
    return res.status(400).json({ error: 'no such product' })
  }
  res.status(200).json(product)

}
//update
const updateProduct = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid' })
  }
  const product = await Product.findOneAndUpdate({ _id: id }, {
    ...req.body
  })
  if (!product) {
    return res.status(400).json({ error: 'no such product' })
  }

  res.status(200).json(product)

}


module.exports = {
  createProduct,
  getProduct,
  getProducts,
  deleteProduct,
  updateProduct
}