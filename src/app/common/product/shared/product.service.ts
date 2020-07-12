import { Injectable } from '@angular/core';
import { products } from 'src/app/products';

@Injectable()
export class productService {
  getProduct() {
    return products;
  }

  getProductById(productId:number) {
    return products[productId]
  }

}