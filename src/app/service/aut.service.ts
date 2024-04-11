import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const host = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class AutService {

  private tokenKey = 'auth_token_quyen';

  constructor(private http: HttpClient) { }

  // Kiểm tra đăng nhập
  checkLogin(data:any){
    return this.http.post<any>(`${host}/account/admin-login`, data);
  }

  // Lưu token vào localStorage
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Lấy token từ localStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Kiểm tra trạng thái đăng nhập
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // Đăng xuất
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
  getUserInfo(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(`${host}/account/admin-info`, { headers });
  }
  getAccountInfo(){
    let storage =sessionStorage.getItem('userInfo')
    // console.log(storage)
    if(storage){
     return JSON.parse(storage);
    }else{
      return null;
    }
  }
}
