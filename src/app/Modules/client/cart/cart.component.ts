import { Component, OnInit } from '@angular/core';
import { ClientGetDataService } from 'src/app/service/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts : any=[];
  totalQuantity :number = this.app.getCartTotalQuantity();
  totalPrice :number =this.app.getCartTotalPrice();

  constructor(private app:ClientGetDataService){}

  ngOnInit(): void {
    this.carts =this.app.getcarts();
  }
  subtotal(cart: any){
    return cart.quantity* cart.price;
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
