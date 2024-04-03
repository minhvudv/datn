import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-suachitiethdb',
  templateUrl: './suachitiethdb.component.html',
  styleUrls: ['./suachitiethdb.component.css']
})
export class SuachitiethdbComponent implements OnInit{
  suacthdb: FormGroup;
  id : string | null = null;
  constructor(private fb: FormBuilder , 
    private sua: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute)
    {
      this.suacthdb = this.fb.group({
        IDChitietDHB: [''],
        Slban: [''],
        DGban: [''],
        SanPhamID: [''],
        TenSanPham: [''],
      });
    }
    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((params) => {
        this.id = params.get('id');
        if (this.id) {
         
          // Lấy thông tin sản phẩm và hiển thị hình ảnh
          this.sua.getonecthdb(this.id).subscribe((res) => {
            const Upro = res[0];
            this.suacthdb.patchValue(Upro);
            
          });
        } 
      }); 
    }
    onUpdatecthdb(){
    const productData = this.suacthdb.value;
    const formData = new FormData();
    for (const key in productData) {
      formData.append(key, productData[key]);
    }
  
    this.sua.getsuacthdb(this.id, formData).subscribe(
      (data) => {
        console.log(data);
        if (data) {
          Swal.fire('Thành công', 'Sửa thành công', 'success').then(() => {
            this.router.navigate(['admin/chitiethdb']);
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
