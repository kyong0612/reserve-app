import { Injectable } from '@angular/core';
import { products } from 'src/app/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class productService {

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get('/api/v1/products');
  }

  getProductById(productId: number) {
    return products[productId]
  }

}