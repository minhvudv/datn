import { Component } from '@angular/core';
import { ClientGetDataService } from 'src/app/service/client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loaisp',
  templateUrl: './loaisp.component.html',
  styleUrls: ['./loaisp.component.css']
})
export class LoaispComponent {
  constructor(private shop:ClientGetDataService, private active: ActivatedRoute){}
  id: any;
  sanpham: any[]=[];
  loaihang: any;
  
  

  ngOnInit(){  
    this.id = this.active.paramMap.subscribe((query: any ) =>{
      this.id =query.get('id');
      this.shop.getlsp().subscribe(res=>{
      
        this.loaihang =res;
        console.log(this.loaihang)
      }) 

      this.shop.getsanphamtheoloai(this.id).subscribe(res => {
        this.sanpham = res;  
        
        console.log(this.sanpham)
      });
      
    }) 
  }
}
