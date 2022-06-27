import { NgModule } from "@angular/core";
import { CounterService } from "../services/counter.service";
import { ProductsComponent } from "./products.component";

@NgModule({
  declarations: [ProductsComponent],
  providers: [CounterService],
  exports: [ProductsComponent]
})
export class ProductsModule {
}