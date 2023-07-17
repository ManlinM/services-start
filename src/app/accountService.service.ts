
export class AccountService{

    account: {name: string, status: string};
    id: number;
    
  
  
    onSetTo(status: string) {
      this.statusChanged.emit({id: this.id, newStatus: status});
      console.log('A server status changed, new status: ' + status);
    }



    onCreateAccount(accountName: string, accountStatus: string) {
        this.accountAdded.emit({
          name: accountName,
          status: accountStatus
        });
        console.log('A server status changed, new status: ' + accountStatus);
      }


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
    
      onAccountAdded(newAccount: {name: string, status: string}) {
        this.accounts.push(newAccount);
      }
    
      onStatusChanged(updateInfo: {id: number, newStatus: string}) {
        this.accounts[updateInfo.id].status = updateInfo.newStatus;
      }
}