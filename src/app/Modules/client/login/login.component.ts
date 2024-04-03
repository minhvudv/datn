import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginF: FormGroup = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('',Validators.required),
  });
  constructor(private loginSrv: LoginService){
  }
  get f (){
    return this.loginF.controls;
  }
  ngOnInit(): void {
  }
  onLogin(): void {
    if (this.loginF.invalid) {
      return;
    }
  
    this.loginSrv.login(this.loginF.value).subscribe((res: any) => {
      if (res.length === 0) {
        Swal.fire({
          title: 'Tài khoản hoặc mật khẩu không chính xác!',
          icon: 'warning'
        });
      } else {
        Swal.fire({
          title: 'Đăng nhập thành công',
          icon: 'success'
        }).then((result) => {
          if (result.isConfirmed) {
            // Lưu thông tin đăng nhập vào sessionStorage
            sessionStorage.setItem('login', JSON.stringify(res));
            // Chuyển hướng đến trang chính
            window.location.href = 'http://localhost:4200/';
          }
        });
      }
    });
  }
  
}