const Product = require('./model/product')
const product = require('./model/product')


class fakeDb {
  constructor() {
    this.products = [{
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      heading1: 'sample heading 1',
      heading2: 'sample heading 2',
      heading3: 'sample heading 3',
      headingtext1: 'aaaaaa',
      headingtext2: 'bbbbbb',
      headingtext3: 'cccccc',
      coverimg: "./assets/img/phone-cover.jpg",
      topimg: "https://picsum.photos/100/100"
    }, {
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      heading1: 'sample heding 1',
      heading2: 'sample heading 2',
      heading3: 'sample heading 3',
      headingtext1: 'aaaaaa',
      headingtext2: 'bbbbbb',
      headingtext3: 'cccccc',
      coverimg: "./assets/img/phone-cover.jpg",
      topimg: "https://picsum.photos/100/100"
    }, {
      name: 'Phone Standard',
      price: 299,
      description: 'サンプルテキスト',
      heading1: 'サンプルテキスト',
      heading2: 'サンプルテキスト',
      heading3: 'サンプルテキスト',
      headingtext1: 'aaaaaa',
      headingtext2: 'bbbbbb',
      headingtext3: 'cccccc',
      coverimg: "./assets/img/phone-cover.jpg",
      topimg: "https://picsum.photos/100/100"
    }, {
      name: 'Phone special',
      price: 999,
      description: 'this is the special,amazing,phone',
      heading1: 'sample heding 1',
      heading2: 'sample heading 2',
      heading3: 'sample heading 3',
      headingtext1: 'aaaaaa',
      headingtext2: 'bbbbbb',
      headingtext3: 'cccccc',
      coverimg: "./assets/img/phone-cover.jpg",
      topimg: "https://picsum.photos/100/100"
    }]
  }

  async initDB() {
    await this.cleanDB()
   this.pushProductsToDb()
  }

  async cleanDB() {
  await product.deleteMany({})
}

  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }

  seeDb() {
    this.pushProductsToDb()
  }
}

module.exports = fakeDb
