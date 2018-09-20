import { Component, OnInit } from '@angular/core';
import { logging } from '../../../node_modules/protractor';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  model: any;


  constructor() {
    this.model={
      "processor":"asd"
    }
  }

  login(form) {
    console.log(form);

  }

  field(data) {
    console.log(data);

  }

  ngOnInit() {
  }

}
