import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './common/product/product-list/product-list.component';
import { ProductDetailComponent } from './common/product/product-detail/product-detail.component';
import { ProductModule } from './common/product/product.module';
import { ProductComponent } from './common/product/product.component';


const routes: Routes = [
  { path: '', redirectTo:'products',pathMatch:'full' }
  //   { path: 'detail', component: ProductDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
