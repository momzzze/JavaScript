import { Component, OnInit, Output } from '@angular/core';
import { ICause } from '../shared/interfaces/cause';
import { CausesService } from '../causes.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  get causes() {
    return this.causesService.causes;
  }
  @Output() selectCause: EventEmitter<ICause> = new EventEmitter();


  constructor(private causesService: CausesService) {

  }

  ngOnInit() {
    this.causesService.loadCauses();
  }
  selectCauseHandler(cause: ICause) {
    //this.selectCause.emit(cause);

    this.causesService.selectedCause = cause;
  }
}
