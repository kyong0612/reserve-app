//webサーバのフレームワーク
const express = require('express')
//mongoDBサーバのフレームワーク
const mongoose = require('mongoose')

const config = require('./config/index') //index省略可
const sampledb = require('./sample-db')

const productRoutes = require('./routes/products')
const path = require('path')

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => {
    if (process.env.NODE_ENV !== 'production') {
      const sampleDb = new sampledb()
      // sampleDb.initDB()
    }
  }
)


const app = express()

app.use('/api/v1/products', productRoutes)


if (process.env.NODE_ENV === 'production') {
  // app.dist呼び出し
  const appPath = path.join(__dirname, '..', 'dist', 'reservation-app')
  app.use(express.static(appPath))
  app.get("*", function (req, res) {
    res.sendFile(Path.resolve(appPath, 'index.html'))
  })
}



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
