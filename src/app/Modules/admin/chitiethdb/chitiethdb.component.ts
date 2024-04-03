import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-chitiethdb',
  templateUrl: './chitiethdb.component.html',
  styleUrls: ['./chitiethdb.component.css']
})
export class ChitiethdbComponent {
  chitiethdb: any[]=[];
  constructor(private cthdb:AdminService){}

  

  ngOnInit(){
    this.cthdb.getchitiethdb().subscribe(res=>{
      
      this.chitiethdb =res;
      console.log(this.chitiethdb)
    })    
  }
  onXoa(IDChitietDHB: number): void {
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
        this.cthdb.getxoacthdb(IDChitietDHB).subscribe(
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
