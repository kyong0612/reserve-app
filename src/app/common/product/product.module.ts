import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list/product-list.component';
import { AppComponent } from '../../app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';


const routes: Routes = [{
    path: 'products', component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: 'detail', component: ProductDetailComponent }
    ]
  }]
  

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ProductModule { }
