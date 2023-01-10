import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router:Router) {}
  pmbinfo(){
    this.router.navigate(['tabs/tab1'])
  }
  pmbfee(){
    this.router.navigate(['tabs/tab2'])
  }
  pmbreg(){
    this.router.navigate(['tabs/tab3'])
  }
  pmbstat(){
    this.router.navigate(['tabs/tab4'])
  }
  pmblogout(){
    this.router.navigate(['login'])
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

}
