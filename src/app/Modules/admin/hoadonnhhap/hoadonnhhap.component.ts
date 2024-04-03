import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
@Component({
  selector: 'app-hoadonnhhap',
  templateUrl: './hoadonnhhap.component.html',
  styleUrls: ['./hoadonnhhap.component.css']
})
export class HoadonnhhapComponent {
  hoadonnhap: any[]=[];
  constructor(private hdn:AdminService){}

  

  ngOnInit(){
    this.hdn.gethoadonnhap().subscribe(res=>{
      
      this.hoadonnhap =res;
      console.log(this.hoadonnhap)
    })    
  }
}
