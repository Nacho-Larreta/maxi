import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CounterService } from '../services/counter.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: [] = [];
  destroy: Subject<void> = new Subject();

  constructor(public counterService: CounterService, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getCharacters().pipe(takeUntil(this.destroy)).subscribe(products => this.products = products)
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
