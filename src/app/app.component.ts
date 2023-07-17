import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
accounts=[];
onAccountAdded(accountAdded:any[]){
this.accounts.push(accountAdded);
}
}
