import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductModule } from './common/product/product.module';
import { AuthModule } from './auth/auth.module';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ComingSoonModule } from './coming-soon/coming-soon.module';




const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  //   { path: 'detail', component: ProductDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule,
    AuthModule,
    ComingSoonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
