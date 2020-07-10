//webサーバのフレームワーク
const express = require('express')
//mongoDBサーバのフレームワーク
const mongoose = require('mongoose')

const config = require('./config/dev')
const FakeDb = require('./sample-db')

const productRoutes = require('./routes/products')



mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => {
    const fakeDb = new FakeDb()
    fakeDb.initDB()
  }
)


const app = express()

app.use('/app/v1/product',productRoutes)


// app.get('/products', function (req, res) {
//   res.json({
//     'success': true
//   })
// })

//AWSなどデプロイ環境に対応
const PORT = process.env.PORT || '3001'

app.listen(PORT, function () {
  console.log('I am running')
})
