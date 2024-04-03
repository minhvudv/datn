import { Component } from '@angular/core';
import { ClientGetDataService } from 'src/app/service/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private sanpham:ClientGetDataService){}
  sanphammoi: any[]=[];
  sanphambanchay: any[]=[];
  

  ngOnInit(){
    this.sanpham.getsanphammoi().subscribe(res=>{
      this.sanphammoi =res;
    })
    this.sanpham.getsanphambanchay().subscribe(res=>{
      
      this.sanphambanchay =res;
      console.log(res);
     })
   
  }

 
}
