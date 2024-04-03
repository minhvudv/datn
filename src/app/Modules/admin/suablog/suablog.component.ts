
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-suablog',
  templateUrl: './suablog.component.html',
  styleUrls: ['./suablog.component.css']
})
export class SuablogComponent implements OnInit {
  suablog: FormGroup;
  id : string | null = null;
  constructor(private fb: FormBuilder , 
    private sua: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute)
    {
      this.suablog = this.fb.group({
        BlogID: [''],
        TenBlog: [''],
        AnhBlog: [''],
        TomTat: [''],
        NoiDung: [''],
        NguoiDang: [''],

      });
    }
    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((params) => {
        this.id = params.get('id');
        if (this.id) {
         
          // Lấy thông tin sản phẩm và hiển thị hình ảnh
          this.sua.getoneblog(this.id).subscribe((res) => {
            const Upro = res[0];
            this.suablog.patchValue(Upro);
            
          });
        } 
      }); 
    }

    onUpdateblog(){
    const productData = this.suablog.value;
    const formData = new FormData();
    for (const key in productData) {
      formData.append(key, productData[key]);
    }
  
    this.sua.getsuablog(this.id, formData).subscribe(
      (data) => {
        console.log(data);
        if (data) {
          Swal.fire('Thành công', 'Sửa thành công', 'success').then(() => {
            this.router.navigate(['admin/blogadmin']);
          });
        } else {
          Swal.fire('Lỗi', 'Đã xảy ra lỗi', 'error');
        }
      },
      (error) => {
        console.error('Lỗi khi cập nhật sản phẩm:', error);
        Swal.fire('Lỗi', 'Đã xảy ra lỗi', 'error');
      }
    );
  }
}
