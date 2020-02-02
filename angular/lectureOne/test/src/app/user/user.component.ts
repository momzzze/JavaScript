import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() info: {
    name: string,
    age: number
  }
  constructor() { }

  ngOnInit() {
  }

}
