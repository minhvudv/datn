import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-themloaisp',
  templateUrl: './themloaisp.component.html',
  styleUrls: ['./themloaisp.component.css']
})
export class ThemloaispComponent {
  themmoiloaisp: FormGroup = new FormGroup({
    TenLH: new FormControl(''),
  })
  constructor(private themloaisp:AdminService) {
    
  }
  onAddloaisp(){ 
    if(this.themmoiloaisp.invalid) {
      return;
    }
    this.themloaisp.getthemloaisp(this.themmoiloaisp.value).subscribe( function(res: any){   
      Swal.fire({
        title: 'Thêm mới thành công',
        icon: 'success'
        }).then((result) => {
        if (result.isConfirmed) {
          location.assign('http://localhost:4200/admin/loaisanphamadmin');
        }
      });
    });  
  }

}
