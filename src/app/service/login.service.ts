import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const host = "http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
    login(body :any): any {
      return this.http.post<any>(`${host}/account/login/`, body);
    }

    checkLogin(): any{
      let josnData =sessionStorage.getItem('login');
      if(josnData){
        return JSON.parse(josnData)
      }else{
        return false
      }
    }
  
}
