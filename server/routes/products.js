const express = require('express')
const router = express.Router()
const Product = require('../model/product')


//サーバーサイドhttp:GETテスト
router.get('/test', function (req, res) {
  res.json({
    'success': true
  })
})

router.get('', function (req, res) {
  Product.find({}, function (err, foundProducts) {
    return res.json(foundProducts)
  })
})

router.get('/:productId', function (req, res) {
  const productId = req.params.productId
  Product.findById(productId, function (err, fundProduct) {
    if (err) {
      return res.status(422).send({
        errors: [{
          title: 'Product erro',
          detail: 'Product not found!'
        }]
      })
    }
    return res.json(fundProduct)
  })
})

module.exports = router
