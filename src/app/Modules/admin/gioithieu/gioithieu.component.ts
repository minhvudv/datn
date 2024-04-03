import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
@Component({
  selector: 'app-gioithieu',
  templateUrl: './gioithieu.component.html',
  styleUrls: ['./gioithieu.component.css']
})
export class GioithieuComponent {
  constructor(private gioithieu:AdminService){}
  gt: any[]=[];
  

  ngOnInit(){
    this.gioithieu.getgioithieuadmin().subscribe(res=>{
      
      this.gt =res;
      console.log(this.gt)
    })    
  }
}
