import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {

  counter: number = 0;

  increase() {
    this.counter += 1;
  }

  decrease() {
    this.counter -= 1;
  }

}