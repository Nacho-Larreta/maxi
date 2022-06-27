import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maxi';
  show: boolean = false;

  showRooter() {
    this.show = !this.show;
  }
}
