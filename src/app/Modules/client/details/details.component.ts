import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientGetDataService } from 'src/app/service/client.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    id: any;
    productdetails: any;
    carts: any=this.dataService.getcarts();
    // sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')):
  
    constructor(private dataService:ClientGetDataService, private active: ActivatedRoute){}
  
    ngOnInit(){
      console.log(this.carts)
      this.id = this.active.paramMap.subscribe((query: any ) =>{
        this.id =query.get('id');
  
        this.dataService.getchitietsp(this.id).subscribe((res: any)=>{
          this.productdetails =res[0];
          console.log(this.productdetails)
        })
  
      })
    }
    onAddTocart(productdetails: any){

      let idx= this.carts.findIndex((item :any)=>{
        return item.id == productdetails.SanPhamID
      });
      if (idx >=0){
        this.carts[idx].quantity += 1;
      } else{
        let cartItem:any={
          id :productdetails.SanPhamID,
          img :productdetails.AnhSanPham,
          name: productdetails.TenSanPham,
          price:productdetails.GiaBan,
          quantity:1,
          subtotal: function(){
            return this.price * this.quantity;
          }
        }
        this.carts.push(cartItem);
      }

      //lưu vào storage

      this.dataService.saveCart(this.carts);
      Swal.fire({
        title:'Thêm vào giỏ hàng thành công',
        icon: 'success'
      })
    }
  }
