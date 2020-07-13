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
    // this.products = this.productService.getProduct()
    const productsObservable = this.productService.getProduct();
    productsObservable.subscribe(
      (data) => {this.products = data},
      (err) => { console.error('something wrong occurred: ' + err); },
      () => { console.log('done'); }
    )

    // //observationチュートリアル
    // const observable = new Observable(subscriber => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });
    // console.log('just before subscribe');
    // observable.subscribe({
    //   next(x) { console.log('got value ' + x); },
    //   error(err) { console.error('something wrong occurred: ' + err); },
    //   complete() { console.log('done'); }
    // });
    // console.log('just after subscribe');

  }

}
