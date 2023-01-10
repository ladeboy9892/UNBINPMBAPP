import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

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
  ngOnInit() {
  }

}
