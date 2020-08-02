//webサーバのフレームワーク
const express = require('express')
//mongoDBサーバのフレームワーク
const mongoose = require('mongoose')
//POSTリクエストフレームワーク
const bodyParser = require('body-parser')

const config = require('./config/index') //index省略可
const sampledb = require('./sample-db')

const productRoutes = require('./routes/products')
const userRoutes = require('./routes/users')
const path = require('path')

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(
  () => {
    if (process.env.NODE_ENV !== 'production') {
      const sampleDb = new sampledb()
      // sampleDb.initDB()
    }
  }
)


const app = express()
app.use(bodyParser.json())

app.use('/api/v1/products', productRoutes)
app.use('/api/v1/users', userRoutes)


if (process.env.NODE_ENV === 'production') {
  // app.dist呼び出し
  const appPath = path.join(__dirname, '..', 'dist', 'reservation-app')
  app.use(express.static(appPath))
  app.get("*", function (req, res) {
    res.sendFile(Path.resolve(appPath, 'index.html'))
  })
}

// // 開発用
// const appPath = path.join(__dirname, '..', 'dist', 'reservation-app')
// app.use(express.static(appPath))
// app.get("*", function (req, res) {
//   res.sendFile(Path.resolve(appPath, 'index.html'))
// })



// app.get('/products', function (req, res) {
//   res.json({
//     'success': true
//   })
// })

//herokuデプロイ環境に対応
const PORT = process.env.PORT || '3001'

app.listen(PORT, function () {
  console.log('I am running')
})
