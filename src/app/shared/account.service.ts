import { EventEmitter, Injectable } from '@angular/core';
import { Account } from './account/account';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
accounts=[]
constructor(private loggingService:LoggingService) { }

//create an event that can be triggered in one component and listent to in another
statusUpdated = new EventEmitter<string>()

addAccount(account:Account){
this.accounts.push(account);
this.loggingService.logStatusChange(account.status);
}

updateStatus(id:number,status:string){
this.accounts[id].status=status;
this.loggingService.logStatusChange(status);
}
 
}
