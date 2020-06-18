import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICause } from 'src/app/shared/interfaces/cause';
import { CausesService } from 'src/app/causes.service';

@Component({
  selector: 'app-cause-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  get causes() { return this.causesService.causes; }

  @Output() selectCause: EventEmitter<ICause> = new EventEmitter();


  constructor(private causesService: CausesService) { }

  ngOnInit() {
    this.causesService.load().subscribe();
  }

  selectCauseHandler(cause: ICause) {
    this.causesService.selectCause(cause);
  }
}
