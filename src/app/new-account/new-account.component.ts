import { Component} from '@angular/core';


import { AccountService } from '../shared/account.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  constructor(private accountService:AccountService){
    //listen to the event
    this.accountService.statusUpdated.subscribe(
      (status:string)=>alert('New Status: '+status)
    );
  }

  onCreateAccount(name:string, status:string){
  this.accountService.addAccount({name,status});
 
   
  }
}
