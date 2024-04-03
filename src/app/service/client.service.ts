import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map } from "rxjs";
import { CartItem } from "../Modules/client/checkout/checkout.component";

const host = "http://localhost:3000"
@Injectable({
    providedIn: "root"
})

export class ClientGetDataService{
  
    constructor(private httpClient: HttpClient) {}

  //home
  getsanphammoi():Observable<any[]>{
    return this.httpClient.get<any[]>(`${host}/sanpham/sanphammoi`);
  }

  getsanphambanchay():Observable<any[]>{
    return this.httpClient.get<any[]>(`${host}/sanpham/sanphambanchay`);
  }

  //cua hang
  getsanpham():Observable<any[]>{
    return this.httpClient.get<any[]>(`${host}/sanpham/`);
  }
  //blog
  getblog():Observable<any[]>{
    return this.httpClient.get<any[]>(`${host}/blog/`);
  }
  //LoaiSanPham
  getlsp():Observable<any[]>{
    return this.httpClient.get<any[]>(`${host}/loaisp/`);
  }

  //chitietsanpham
  getchitietsp(id:number){
  return this.httpClient.get<any[]>(`${host}/sanpham/getonce/${id}`)
  }
  //lay san pham theo loai
  getsanphamtheoloai(id:number){
    return this.httpClient.get<any[]>(`${host}/sanpham//getproductsbycategory/${id}`)
  }
  //chitietsanpham
  getchitietblog(id:number){
    return this.httpClient.get<any[]>(`${host}/blog/getonce/${id}`)
  }


  //
  getcarts(){
    let cartJson = sessionStorage.getItem('cart');
    if(cartJson){
      return JSON.parse(cartJson);

    }else{
      return [];
    }
  }
  saveCart(carts: any){
    let cartJson=JSON.stringify(carts);
    sessionStorage.setItem('cart',cartJson);
  }
  getCartTotalPrice(){
    let carts =this.getcarts();
    let total =0;
    carts.forEach((item :any) => {
      total +=item.quantity * item.price;

    });
    return total;
  }
  getCartTotalQuantity() {
    let carts = this.getcarts();
    console.log('Carts:', carts);
 
    let total = 0;
    carts.forEach((item: any) => {
       console.log('Item:', item);
       total += Number(item.quantity);
    });
 
    return total;
 }
 
  //thanhtoan
  hoadonban(body :any): any {
    return this.httpClient.post<any>(`${host}/hoadonban/add/`, body);
  } 
 
  chitiethdb(DonhangbanID: number, cartItems: CartItem[]): Observable<any> {
    const body = {
      DonhangbanID: DonhangbanID,
      cartItems: cartItems,
    };
    return this.httpClient.post(`${host}/chitiethdb/add/`, body);
  }

}
