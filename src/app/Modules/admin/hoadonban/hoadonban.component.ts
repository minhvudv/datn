import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hoadonban',
  templateUrl: './hoadonban.component.html',
  styleUrls: ['./hoadonban.component.css']
})
export class HoadonbanComponent implements OnInit{
  hoadonban: any[]=[];
  constructor(private hdb:AdminService){}

  

  ngOnInit(){
    this.hdb.gethoadonban().subscribe(res=>{
      
      this.hoadonban =res;
      console.log(this.hoadonban)
    })    
  }
  onXoa(DonhangbanID: number): void {
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
        this.hdb.getxoahdb(DonhangbanID).subscribe(
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
