import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
@Component({
  selector: 'app-chitiethdn',
  templateUrl: './chitiethdn.component.html',
  styleUrls: ['./chitiethdn.component.css']
})
export class ChitiethdnComponent {
  chitiethdn: any[]=[];
  constructor(private cthdn:AdminService){}

  

  ngOnInit(){
    this.cthdn.getchitiethdn().subscribe(res=>{
      
      this.chitiethdn =res;
      console.log(this.chitiethdn)
    })    
  }
}
