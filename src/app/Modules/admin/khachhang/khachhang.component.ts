import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
@Component({
  selector: 'app-khachhang',
  templateUrl: './khachhang.component.html',
  styleUrls: ['./khachhang.component.css']
})
export class KhachhangComponent {
  constructor(private kh:AdminService){}
  khachhang: any[]=[];
  

  ngOnInit(){
    this.kh.getkhachhang().subscribe(res=>{
      
      this.khachhang =res;
      console.log(this.khachhang)
    })    
  }
}
