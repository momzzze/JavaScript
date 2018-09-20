import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}





/*
class Engine {
  constructor(public model: string, public type: string) {

  }
}


class Car {


  constructor(public make: string, public model: string,private engine:Engine) {
    this.engine = new Engine('w12', 'gasoline')
  }
}
let big=new Engine('V8','gasoline')
let small=new Engine('1.6','diesel')

let merc=new Car('Mercedes','s500',big)
let audi=new Car('Audi','S8',small)*/