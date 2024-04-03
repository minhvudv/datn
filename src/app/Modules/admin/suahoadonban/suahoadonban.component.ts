import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-suahoadonban',
  templateUrl: './suahoadonban.component.html',
  styleUrls: ['./suahoadonban.component.css']
})
export class SuahoadonbanComponent implements OnInit {
  suahdb: FormGroup;
  id : string | null = null;
  constructor(private fb: FormBuilder , 
    private sua: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute)
    {
      this.suahdb = this.fb.group({
        DonhangbanID: [''],
        HoTen: [''],
        DiaChi: [''],
        Sdt: [''],
        Email: [''],
        ghichu: [''],
        Trietkhauban: [''],
      });
    }
    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((params) => {
        this.id = params.get('id');
        if (this.id) {
         
          // Lấy thông tin sản phẩm và hiển thị hình ảnh
          this.sua.getonehdb(this.id).subscribe((res) => {
            const Upro = res[0];
            this.suahdb.patchValue(Upro);
            
          });
        } 
      }); 
    }

    onUpdatehdb(){
    const productData = this.suahdb.value;
    const formData = new FormData();
    for (const key in productData) {
      formData.append(key, productData[key]);
    }
  
    this.sua.getsuahdb(this.id, formData).subscribe(
      (data) => {
        console.log(data);
        if (data) {
          Swal.fire('Thành công', 'Sửa thành công', 'success').then(() => {
            this.router.navigate(['admin/hoadonban']);
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
