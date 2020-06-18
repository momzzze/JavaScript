import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccauntsService } from '../accaunts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;


  constructor(private logingService: LoggingService,
    private accauntService: AccauntsService) { }

  onSetTo(status: string) {
    this.accauntService.updateStatus(this.id, status)
    this.accauntService.statusUpdated.emit(status)
  }
}
