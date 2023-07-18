import { Component, OnInit } from '@angular/core';
import { AccountService } from './shared/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

accounts=[];

constructor(private accountService:AccountService){}

ngOnInit(){
  //reference type, can use = to assign array to a new array
  this.accounts = this.accountService.accounts;
}
}
