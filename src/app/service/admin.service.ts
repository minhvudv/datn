import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map } from "rxjs";


const host = "http://localhost:3000"
@Injectable({
    providedIn: "root"
})
export class AdminService { 

  constructor( private httpClient: HttpClient) { }
  //sanpham
  getsanpham():Observable<any[]>{
    return this.httpClient.get<any[]>(`${host}/sanpham/`);
  }

  //loaisanpham
  getloaisanpham():Observable<any[]>{
    return this.httpClient.get<any[]>(`${host}/loaisp/`);
  }

    //blog
    getblogadmin():Observable<any[]>{
      return this.httpClient.get<any[]>(`${host}/blog/`);
    }

  //gioithieu
  getgioithieuadmin():Observable<any[]>{
    return this.httpClient.get<any[]>(`${host}/gioithieu/`);
  }
  //nhacungcap
  getnhacc():Observable<any[]>{
    return this.httpClient.get<any[]>(`${host}/nhacc/`);
  }
  //hoadonban
  gethoadonban():Observable<any[]>{
    return this.httpClient.get<any[]>(`${host}/hoadonban/`);
  }
   //hoadonnhap
   gethoadonnhap():Observable<any[]>{
    return this.httpClient.get<any[]>(`${host}/hoadonnhap/`);
  }
  //chitiethoadonban
  getchitiethdb():Observable<any[]>{
    return this.httpClient.get<any[]>(`${host}/chitiethdb/`);
  }
  //chitiethoadonnhap
  getchitiethdn():Observable<any[]>{
    return this.httpClient.get<any[]>(`${host}/chitiethdn/`);
  }
  //khachhang
  getkhachhang():Observable<any[]>{
    return this.httpClient.get<any[]>(`${host}/khachhang/`);
  }
  //nhanvien
  getnhanvien():Observable<any[]>{
    return this.httpClient.get<any[]>(`${host}/nhanvien/`);
  }
   //account
   getaccount():Observable<any[]>{
    return this.httpClient.get<any[]>(`${host}/account/`);
  }
  //them sanpham
  getthemsp(body:any):any{
    return this.httpClient.post<any[]>(`${host}/sanpham/add`, body);
  }
  //xoa sanpham
  getxoasp( id:any){
    return this.httpClient.get<any[]>(`${host}/sanpham/delete/${id}`);
  }
  // suasanpham
  getsuasp(id: any, body: any) {
    return this.httpClient.put<any[]>(`${host}/sanpham/update/${id}`, body);
  }
  //getonesanpham
  getonceProduct(id: any):Observable<any>{
    return this.httpClient.get<any[]>(`${host}/sanpham/getonce/${id}`)
  }

   //them loaisanpham
   getthemloaisp(body:any):any{
    return this.httpClient.post<any[]>(`${host}/loaisp/add`, body);
  }
  //xoa loaisanpham
  getxoaloaisp( id:any){
    return this.httpClient.get<any[]>(`${host}/loaisp/delete/${id}`);
  }
   // suasanpham
   getsualsp(id: any, body: any) {
    return this.httpClient.put<any[]>(`${host}/loaisp/update/${id}`, body);
  }
  //getoneloaisanpham
  getoneloaisp(id: any):Observable<any>{
    return this.httpClient.get<any[]>(`${host}/loaisp/getonce/${id}`)
  }
  //them blog
   getthemblog(body:any):any{
    return this.httpClient.post<any[]>(`${host}/blog/add`, body);
  }
  //xoa blog
  getxoablog( id:any){
    return this.httpClient.get<any[]>(`${host}/blog/delete/${id}`);
  } 
  //getoneblog
  getoneblog(id: any):Observable<any>{
    return this.httpClient.get<any[]>(`${host}/blog/getonce/${id}`)
  }
  // suablog
   getsuablog(id: any, body: any) {
    return this.httpClient.put<any[]>(`${host}/blog/update/${id}`, body);
  }
  //getonehdb
  getonehdb(id: any):Observable<any>{
    return this.httpClient.get<any[]>(`${host}/hoadonban/getonce/${id}`)
  }
  // suahdb
   getsuahdb(id: any, body: any) {
    return this.httpClient.put<any[]>(`${host}/hoadonban/update/${id}`, body);
  }
    //xoahdb
    getxoahdb( id:any){
      return this.httpClient.get<any[]>(`${host}/hoadonban/delete/${id}`);
    } 

    //getonecthdb
  getonecthdb(id: any):Observable<any>{
    return this.httpClient.get<any[]>(`${host}/chitiethdb/getonce/${id}`)
  }
  // suavthdb
   getsuacthdb(id: any, body: any) {
    return this.httpClient.put<any[]>(`${host}/chitiethdb/update/${id}`, body);
  }
  //xoacthdb
  getxoacthdb( id:any){
    return this.httpClient.get<any[]>(`${host}/chitiethdb/delete/${id}`);
  } 
  //xoaaccount
  getxoaaccount( id:any){
    return this.httpClient.get<any[]>(`${host}/account/delete/${id}`);
  } 
}
