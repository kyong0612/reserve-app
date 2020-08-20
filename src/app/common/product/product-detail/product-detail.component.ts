import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productService } from '../shared/product.service';
import { error } from '@angular/compiler/src/util';


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
      // this.product = this.productService.getProductById(params.get('productId'));
      const productObservable = this.productService.getProductById(params.get('productId'));
      productObservable.subscribe(
        (data) => {
          this.product = data
        },
        (error) => {
          console.log("エラー発生")
        }
      )

    });
  }

}
