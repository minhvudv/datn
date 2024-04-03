import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { from } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent implements OnInit {
  constructor(private shop:AdminService){}
  sanpham: any[]=[];
  Titlle: any;
  p:number=1;
  items:any[]=[];
  pageSize: number=10;

  ngOnInit(){
    this.shop.getsanpham().subscribe((res:any)=>{
      
      this.items =res;
    })   
  }


onXoa(SanPhamID: number): void {
  Swal.fire({
    title: 'Xác nhận xóa',
    text: 'Bạn có chắc chắn muốn xóa sản phẩm này?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Xóa',
    cancelButtonText: 'Hủy bỏ'
  }).then((result) => {
    if (result.isConfirmed) {
      this.shop.getxoasp(SanPhamID).subscribe(
        (res) => {
          location.reload();
        },
        (error) => {
          console.error('Lỗi khi xóa sản phẩm:', error);
          Swal.fire({
            title: 'Lỗi',
            text: 'Đã xảy ra lỗi khi xóa sản phẩm.',
            icon: 'error'
          });
        }
      );
    }
  });
}

}
