import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-themblog',
  templateUrl: './themblog.component.html',
  styleUrls: ['./themblog.component.css']
})
export class ThemblogComponent {
  themmoiblog: FormGroup = new FormGroup({
    TenBlog: new FormControl(''),
    AnhBlog: new FormControl(''),
    TomTat: new FormControl(''),
    NoiDung: new FormControl(''),
    NguoiDang: new FormControl(''),
  })

  constructor(private themblog:AdminService){}
  onAddblog(){
    if(this.themmoiblog.invalid) {
      return;
    }
    this.themblog.getthemblog(this.themmoiblog.value).subscribe( function(res: any){   
      Swal.fire({
        title: 'Thêm mới thành công',
        icon: 'success'
        }).then((result) => {
        if (result.isConfirmed) {
          location.assign('http://localhost:4200/admin/blogadmin');
        }
      });
    });  
  }
}
