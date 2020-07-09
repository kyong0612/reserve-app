//webサーバのフレームワーク
const express = require('express')
//mongoDBサーバのフレームワーク
const mongoose = require('mongoose')

const config = require('./config/dev')
const FakeDb = require('./fake-db')


mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => {
    const fakeDb = new FakeDb()
    fakeDb.seeDb()
  }
)

const app = express()

app.get('/products', function (req, res) {
  res.json({
    'success': true
  })
})

//AWSなどデプロイ環境に対応
const PORT = process.env.PORT || '3001'

app.listen(PORT, function () {
  console.log('I am running')
})
