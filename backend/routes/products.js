const express = require('express');
const {
  createProduct,
  getProduct,
  getProducts,
  deleteProduct,
  updateProduct
} = require('../controllers/productController')
const router = express.Router()

router.get('/',getProducts)  

router.get('/:id',getProduct)

router.post('/',createProduct)

router.delete('/:id',deleteProduct)

router.patch('/:id',updateProduct)

module.exports = router