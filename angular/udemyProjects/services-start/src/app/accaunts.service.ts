import { LoggingService } from "./logging.service";
import { Injectable,EventEmitter } from "@angular/core";

@Injectable()

export class AccauntsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];
    statusUpdated= new EventEmitter<string>();


    constructor(private logginService: LoggingService) { }


    addAccaunt(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        this.logginService.logStatusChange(status);
    }
    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.logginService.logStatusChange(status);
    }
}