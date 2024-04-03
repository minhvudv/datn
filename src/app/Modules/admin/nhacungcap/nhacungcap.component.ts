import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
@Component({
  selector: 'app-nhacungcap',
  templateUrl: './nhacungcap.component.html',
  styleUrls: ['./nhacungcap.component.css']
})
export class NhacungcapComponent {
  constructor(private ncc:AdminService){}
  cc: any[]=[];
  

  ngOnInit(){
    this.ncc.getnhacc().subscribe(res=>{
      
      this.cc =res;
      console.log(this.cc)
    })    
  }
}
