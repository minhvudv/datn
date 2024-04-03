import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-loaisanpham',
  templateUrl: './loaisanpham.component.html',
  styleUrls: ['./loaisanpham.component.css']
})
export class LoaisanphamComponent {
  constructor(private lsp:AdminService){}
  loaisp: any[]=[];
  

  ngOnInit(){
    this.lsp.getloaisanpham().subscribe(res=>{
      
      this.loaisp =res;
      console.log(this.loaisp)
    })   
  }
  onXoa(LoaiHangID: number): void {
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
        this.lsp.getxoaloaisp(LoaiHangID).subscribe(
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
