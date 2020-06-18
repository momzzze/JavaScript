import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccauntsService } from '../accaunts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private logingService: LoggingService,
    private accauntService: AccauntsService
  ) {
    this.accauntService.statusUpdated.subscribe(
      (status: string) => {
        alert("New Status: " + status)
      }
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accauntService.addAccaunt(accountName, accountStatus)


  }
}
