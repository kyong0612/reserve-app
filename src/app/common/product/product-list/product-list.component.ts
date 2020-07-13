import { Component, OnInit } from '@angular/core';
import { productService } from '../shared/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any;

  constructor(
    // インスタンス
    private productService: productService
  ) { }

  ngOnInit(): void {
    const productsObservable = this.productService.getProduct();
    productsObservable.subscribe(
      (data) => { this.products = data },
      (err) => { console.error('something wrong occurred: ' + err); },
      () => { console.log('done'); }
    )


  }

}
