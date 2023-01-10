import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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


}
