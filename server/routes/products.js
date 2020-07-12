const express = require('express')
const router = express.Router()
const Product = require('../model/product')



router.get('', function (req, res) {
  Product.find({}, function (err, fundProducts) {
    return res.json(fundProducts)
  })
})

router.get('/:productId', function (req, res) {
  const productId = req.params.productId
  Product.findById(productId, function (err, fundProduct) {
    if (err) {
      return res.status(422).send({ erros: [{ title:'Product erro' ,detail:'Product not found!'  }]})
    }
    return res.json(fundProduct)
  })
})

module.exports = router
