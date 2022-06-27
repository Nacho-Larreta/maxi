import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'maxi',
  templateUrl: './maxi.component.html',
  styleUrls: ['./maxi.component.scss'],
  providers: [CounterService]
})
export class MaxiComponent {
  
  constructor(public counterService: CounterService) {
    
  }

}
