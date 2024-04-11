import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutService } from 'src/app/service/aut.service';
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
  constructor(private loginSrv: LoginService, private auth: AutService, private router:Router){

  }
  get f (){
    return this.loginF.controls;
  }
  ngOnInit(): void {
  }
  // onLogin(): void {
  //   if (this.loginF.invalid) {
  //     return;
  //   }
  
  //   this.loginSrv.login(this.loginF.value).subscribe((res: any) => {
  //     if (res.length === 0) {
  //       Swal.fire({
  //         title: 'Tài khoản hoặc mật khẩu không chính xác!',
  //         icon: 'warning'
  //       });
  //     } else {
  //       Swal.fire({
  //         title: 'Đăng nhập thành công',
  //         icon: 'success'
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           // Lưu thông tin đăng nhập vào sessionStorage
  //           sessionStorage.setItem('login', JSON.stringify(res));
  //           // Chuyển hướng đến trang chính
  //           window.location.href = 'http://localhost:4200/';
  //         }
  //       });
  //     }
  //   });
  // }

  //test
  onLogin() {
    this.auth.checkLogin(this.loginF.value).subscribe(
      (res: any) => {
        const token = res.token;
        // console.log(res)
        if (token) {
          localStorage.setItem('token', token);
          this.auth.getUserInfo(token).subscribe(
            (userInfo: any) => {
              if (userInfo) {
                sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
                // Hiển thị thông báo thành công bằng SweetAlert
                Swal.fire({
                  title: 'Đăng nhập thành công',
                  icon: 'success'
                }).then((result) => {
                  if (result.isConfirmed) {
                    // Chuyển hướng đến trang chính
                    window.location.href = 'http://localhost:4200/';
                  }
                });
              } else {
                console.error('Lỗi: Không có thông tin người dùng.');
              }
            },
            (error) => {
              console.error('Lỗi khi gọi API getUserInfo:', error);
            }
          );
        } else {
          console.log('Server trả về một response không hợp lệ.');
        }
      },
      (error) => {
        // Hiển thị thông báo lỗi bằng SweetAlert
        Swal.fire({
          title: 'Tài khoản hoặc mật khẩu không chính xác!',
          icon: 'warning'
        });
        console.error('Lỗi trong quá trình đăng nhập:', error);
      }
    );
  }
  
  
  
}