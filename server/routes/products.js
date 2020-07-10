const express = require('express')
const router = express.Router()
const Product = require('../model/product')



router.get('', function (req, res) {
  Product.find({}, function (err, fundProducts) {
    res.json(fundProducts)
  })
})

router.get('/:productId', function (req, res) {
  const productId = req.params.productId
  Product.findById(productId, function (err, fundProduct) {
    res.json(fundProduct)
  })
})

module.exports = router
