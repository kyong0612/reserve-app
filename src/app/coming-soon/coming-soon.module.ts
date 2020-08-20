
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComingSoonComponent } from './coming-soon.component';


const routes: Routes = [
  { path: 'coming-soon', component: ComingSoonComponent }
]


@NgModule({
  declarations: [
    ComingSoonComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ComingSoonModule { }