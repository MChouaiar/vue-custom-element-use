import { Component } from '@angular/core';
import '../assets/my-custom-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-with-vue';
  message: string = "message from Angular world";
  count: number = 0;

  updateCounter(event) {
    this.count = event.detail[0]
  }
}
