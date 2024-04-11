import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  constructor( private loginSrv:LoginService ){}
  account :any;

  ngOnInit( ) : void{
    let storage = sessionStorage.getItem('userInfo');

    if (storage) {
      this.account = JSON.parse(storage);
    }
  }
}
