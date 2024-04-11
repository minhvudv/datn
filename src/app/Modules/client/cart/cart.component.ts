import { Component, OnInit } from '@angular/core';
import { ClientGetDataService } from 'src/app/service/client.service';
import { AutService } from 'src/app/service/aut.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts : any=[];
  totalQuantity :number = this.app.getCartTotalQuantity();
  totalPrice :number =this.app.getCartTotalPrice();
  userInfo : any;
  constructor(private app:ClientGetDataService, private checkuser:AutService, private router: Router){}
  
  ngOnInit(): void {

    this.carts =this.app.getcarts();
  }
  subtotal(cart: any){
    return cart.quantity* cart.price;
  }
  checkout() {
    let storage = sessionStorage.getItem('userInfo');
    if (storage) {
      this.userInfo = JSON.parse(storage);
    } else {
      this.router.navigate(['client/login']);
      return; 
    }
    this.router.navigate(['client/checkout'], { state: { carts: this.carts } });
}

  updateQuantity(idx:number, ev:any){
    
    let newQuantity = parseInt(ev.target.value);

    newQuantity = newQuantity > 0 ? newQuantity : 1;
    newQuantity = newQuantity <= 100 ? newQuantity : 100;
    ev.target.value = newQuantity;
    this.carts[idx].quantity=ev.target.value;
    this.app.saveCart(this.carts);
    this.totalQuantity  = this.app.getCartTotalQuantity();
    this.totalPrice  =this.app.getCartTotalPrice();
  }
  removecart(idx: number){
    let _this=this;
    Swal.fire({
      title:'Bạn có chắc không ?',
      text :"Nếu ok xóa khỏi giỏ hàng.",
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Ok, xóa!'

    }).then(function (isConfirm: any){
      if(isConfirm.isConfirmed){
        Swal.fire(
          'Đã xóa!',
          'Đã xóa thành công',
          'success',
        );
        _this.carts.splice(idx,1);
        _this.app.saveCart(_this.carts);
        _this.totalQuantity  = _this.app.getCartTotalQuantity();
        _this.totalPrice  =_this.app.getCartTotalPrice();
      }

    });
  }
}
