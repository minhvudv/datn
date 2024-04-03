import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-themsanpham',
  templateUrl: './themsanpham.component.html',
  styleUrls: ['./themsanpham.component.css']
})
export class ThemsanphamComponent implements OnInit {
  themmoisp: FormGroup = new FormGroup({
    LoaiHangID: new FormControl(''),
    TenSanPham: new FormControl(''),
    AnhSanPham: new FormControl(''),
    GiaBan: new FormControl(''),
    Giong: new FormControl(''),
    PhuongPhapSoChe: new FormControl(''),
    DoCaoTrong: new FormControl(''),
    MucRang :new FormControl(''),
    HuongVi: new FormControl(''),

  })
  constructor(private themsanpham: AdminService){
  }
  onAddsp(){
    if(this.themmoisp.invalid) {
      return;
    }
    this.themsanpham.getthemsp(this.themmoisp.value).subscribe( function(res: any){   
      Swal.fire({
        title: 'Thêm mới thành công',
        icon: 'success'
        }).then((result) => {
        if (result.isConfirmed) {
          location.assign('http://localhost:4200/admin/sanphamadmin');
        }
      });
    });  
  }

  ngOnInit(): void {
  }
}
