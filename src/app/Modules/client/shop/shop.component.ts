import { Component } from '@angular/core';
import { ClientGetDataService } from 'src/app/service/client.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { from } from 'rxjs';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  constructor(private shop:ClientGetDataService){}
  sanpham: any[]=[];
  Titlle: any;
  p:number=1;
  items:any[]=[];
  pageSize: number=10;

  ngOnInit(){
    this.shop.getsanpham().subscribe(res=>{
      
      this.sanpham =res;
      console.log(this.sanpham)
    })   
  }
}
