import { Component } from '@angular/core';
import { ICause } from './shared/interfaces/cause';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCause: ICause;
  
  selectCauseHandler(cause: ICause) {
    this.selectedCause = cause;
  }
}
