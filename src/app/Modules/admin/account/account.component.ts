import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  constructor(private acc:AdminService){}
  account: any[]=[];
  

  ngOnInit(){
    this.acc.getaccount().subscribe(res=>{
      
      this.account =res;
      console.log(this.account)
    })    
  }
  onXoa(id: number): void {
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
        this.acc.getxoaaccount(id).subscribe(
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
