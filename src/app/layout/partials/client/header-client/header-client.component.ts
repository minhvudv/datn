import { Component, OnInit } from '@angular/core';
import { ClientGetDataService } from 'src/app/service/client.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css']
})
export class HeaderClientComponent implements OnInit {
  constructor(private loaihang:ClientGetDataService, private loginSrv:LoginService ){}
  isLogin :any;

  loaisp: any[]=[];
  

  ngOnInit() : void{
    this.loaihang.getlsp().subscribe(res=>{
      
      this.loaisp =res;
      console.log(this.loaisp)
    })   
    this.isLogin = this.loginSrv.checkLogin();
    console.log(this.isLogin) 
  }
  onLogout(){
    sessionStorage.clear();
    location.reload();
  }
  
}
