import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from 'src/app/service/signup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{
  signup: FormGroup = new FormGroup({
    username: new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',Validators.required),
    confirmpassword: new FormControl('',Validators.required ),
  });

  constructor(private signupSrv: SignupService){
  }
  get f (){
    return this.signup.controls;
  }
  ngOnInit(): void {
  }
  onSignup(): void{
  if(this.signup.invalid) {
    return;
  }
  this.signupSrv.signup(this.signup.value).subscribe( function(res: any){   
    Swal.fire({
      title: 'Đăng kí thành công',
      icon: 'success'
      }).then((result) => {
      if (result.isConfirmed) {
        location.assign('http://localhost:4200/client/login');
      }
    });
  });  
  }

}

