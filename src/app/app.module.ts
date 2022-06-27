import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaxiComponent } from './maxi/maxi.component';
import { MostrarComponent } from './maxi/mostrar/mostrar.component';
import { ProductsModule } from './products/products.module';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    MaxiComponent,
    MostrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
