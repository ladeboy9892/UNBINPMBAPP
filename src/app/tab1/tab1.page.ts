import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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
