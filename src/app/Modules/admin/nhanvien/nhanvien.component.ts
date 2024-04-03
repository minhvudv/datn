import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.css']
})
export class NhanvienComponent {
  constructor(private nv:AdminService){}
  nhanvien: any[]=[];
  

  ngOnInit(){
    this.nv.getnhanvien().subscribe(res=>{
      
      this.nhanvien =res;
      console.log(this.nhanvien)
    })    
  }
}
