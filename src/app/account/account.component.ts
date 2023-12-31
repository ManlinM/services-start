import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


import { AccountService } from '../shared/account.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
@Input() id:number;
@Input() account;

constructor(private accountService:AccountService){}

onSetTo(status:string)
{
  this.accountService.updateStatus(this.id,status);
  this.accountService.statusUpdated.emit(status);
}
  
}
