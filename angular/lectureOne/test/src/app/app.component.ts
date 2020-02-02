import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test App Title';
  myAriaRole = 'admin';
  isDelightful = true;
  mySize = 100;
  users = [
    {
      name: 'Test 1',
      age: 10
    }, {
      name: 'Test 2',
      age: 11
    }, {
      name: 'Test 3',
      age: 12
    }, {
      name: 'Test 4',
      age: 13
    }, {
      name: 'Test 5',
      age: 14
    }, {
      name: 'Test 6',
      age: 15
    }, {
      name: 'Test 7',
      age: 16
    }, {
      name: 'Test 8',
      age: 17
    },
  ];
  visible = false;

  toggleVisible() {
    this.visible = !this.visible;
  }
  changeInputTitle(event: any) {
    this.title = event.target.value
  }
  onHover() {
    this.isDelightful = false;
  }
}
