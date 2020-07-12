import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../../../products';
import { productService } from '../shared/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: productService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // this.product = products[+params.get('productId')];
      this.product = this.productService.getProductById(+params.get('productId'));

    });
  }

}
