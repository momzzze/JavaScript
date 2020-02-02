import { Component, OnInit, Input } from '@angular/core';
import { CausesService } from '../causes.service';
import { ICause } from '../shared/interfaces/cause';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  @Input() selectedCause2: ICause;

  get color() {
    if (this.selectedCause.collectedAmount >= this.selectedCause.neededAmount) {
      return 'green'
    }
    if (
      this.selectedCause.collectedAmount < 2*(this.selectedCause.neededAmount / 3) &&
      this.selectedCause.collectedAmount > (this.selectedCause.neededAmount / 3)
    ) {
      return 'yellow'
    }
    return 'red'
  }

  get selectedCause() {
    return this.causesService.selectedCause;
  }
  constructor(private causesService: CausesService) { }

  ngOnInit() {
  }

}
