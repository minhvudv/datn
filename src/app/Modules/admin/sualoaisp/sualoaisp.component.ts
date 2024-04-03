import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sualoaisp',
  templateUrl: './sualoaisp.component.html',
  styleUrls: ['./sualoaisp.component.css']
})
export class SualoaispComponent implements OnInit {

  sualoaisp: FormGroup;
  id : string | null = null;
  constructor(private fb: FormBuilder , 
    private sua: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute)
    {
      this.sualoaisp = this.fb.group({
        LoaiHangID: [''],
        TenLH: [''],
      });
    }
    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((params) => {
        this.id = params.get('id');
        if (this.id) {
         
          // Lấy thông tin sản phẩm và hiển thị hình ảnh
          this.sua.getoneloaisp(this.id).subscribe((res) => {
            const Upro = res[0];
            this.sualoaisp.patchValue(Upro);
            
          });
        } 
      }); 
    }

    onUpdatelsp(){
    const productData = this.sualoaisp.value;
    const formData = new FormData();
    for (const key in productData) {
      formData.append(key, productData[key]);
    }
  
    this.sua.getsualsp(this.id, formData).subscribe(
      (data) => {
        console.log(data);
        if (data) {
          Swal.fire('Thành công', 'Sửa thành công', 'success').then(() => {
            this.router.navigate(['admin/loaisanphamadmin']);
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
