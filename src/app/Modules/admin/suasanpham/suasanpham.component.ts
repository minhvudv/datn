import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-suasanpham',
  templateUrl: './suasanpham.component.html',
  styleUrls: ['./suasanpham.component.css']
})
export class SuasanphamComponent implements OnInit{
  suasanpham: FormGroup;
  id : string | null = null;
  

  constructor(private fb: FormBuilder , 
    private sua: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute)
   {
    this.suasanpham = this.fb.group({
      SanPhamID: [''],
      LoaiHangID: [''],
      TenSanPham: [''],
      AnhSanPham: [''],
      GiaBan: [''],
      Giong: [''],
      PhuongPhapSoChe: [''],
      DoCaoTrong: [''],
      MucRang: [''],
      HuongVi: [''],
    });
  }
  ngOnInit(): any {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
 

      if (this.id) {

        this.sua.getonceProduct(this.id).subscribe((res) => {
          const Upro = res[0];
          this.suasanpham.patchValue(Upro);
          
        });
      } 
    }); 
   
  }
  onUpdate() {
    const productData = this.suasanpham.value;
    const formData = new FormData();
    for (const key in productData) {
      formData.append(key, productData[key]);
    }
  
    this.sua.getsuasp(this.id, formData).subscribe(
      (data) => {
        console.log(data);
        if (data) {
          Swal.fire('Thành công', 'Sửa thành công', 'success').then(() => {
            this.router.navigate(['admin/sanphamadmin']);
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
