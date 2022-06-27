import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaxiComponent } from './maxi/maxi.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'tuvieja',
    component: ProductsComponent
  },
  {
    path: 'maxi',
    component: MaxiComponent
  },
  { 
    path: '', 
    redirectTo: "tuvieja",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
