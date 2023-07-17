import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '../shared/account/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
 @Input() account:Account;
 onSetTo(status:string){
  this.account.status=status;
 }
  
}
