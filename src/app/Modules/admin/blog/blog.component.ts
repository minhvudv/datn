import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { from } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  constructor(private blog:AdminService){}
  tintuc: any[]=[];
  Titlle: any;
  p:number=1;
  items:any[]=[];
  pageSize: number=10;
  

  ngOnInit(){
    this.blog.getblogadmin().subscribe(res=>{
      
      this.tintuc =res;
      console.log(this.tintuc)
    })    
  }
  onXoa(BlogID: number): void {
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
        this.blog.getxoablog(BlogID).subscribe(
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
