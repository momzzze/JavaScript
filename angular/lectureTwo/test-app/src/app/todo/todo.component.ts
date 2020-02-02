import { Component, OnInit, Input, ChangeDetectionStrategy, } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {


  @Input() todo: { title: string };

  constructor() { }

  ngOnInit() {
  }

}
