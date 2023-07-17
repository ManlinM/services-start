import { Component, EventEmitter, Output } from '@angular/core';
import { Account } from '../shared/account/account';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<Account>();
  
  onCreateAccount(name:string,status:string){
    const account: Account = { name, status };
  this.accountAdded.emit(account)
   
  }
}
