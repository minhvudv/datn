import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const host = "http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }
    signup(body :any): any {
      return this.http.post<any>(`${host}/account/add/`, body);
    } 
}
