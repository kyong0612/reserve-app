const Schema = mongoose.Schema;
const mongoose = require('mongoose')
// const ObjectId = Schema.ObjectId;

const ProductsSchema = new Schema({
  // author: ObjectId,
  coverimg: String,
  name: {
    type: Stringm,
    required: true,
    max: [60, '最大60文字までです']
  },
  price: Number,
  description: String,
  heading1: String,
  heading2: String,
  heading3: String,
  headingtext1: String,
  headingtext2: String,
  headingtext3: String,
});

module.exports = mongoose.module('Product', ProductsSchema)
