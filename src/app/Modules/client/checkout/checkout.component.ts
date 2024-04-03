import { Component } from '@angular/core';
import { ClientGetDataService } from 'src/app/service/client.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

export interface CartItem {
  SanPhamID: number;
  TenSanPham: string;
  DGban: number;
  Slban: number;
}
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cartItems: CartItem[] = [];
  ck: any = [];
  totalQuantity: number = this.getdataService.getCartTotalQuantity();
  totalPrice: number = this.getdataService.getCartTotalPrice();

  checkout: FormGroup = new FormGroup({
    HoTen: new FormControl('', Validators.required),
    DiaChi: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Sdt: new FormControl('', [Validators.required, Validators.maxLength(11)]),
    ghichu: new FormControl(''),
  });

  constructor(private getdataService: ClientGetDataService) {}

  onCheckout() {
    if (this.checkout.invalid) {
      return;
    }

    // Thực hiện lưu thông tin hóa đơn
    this.getdataService.hoadonban(this.checkout.value).subscribe(
      (res: any) => {
        Swal.fire({
          title: 'Thanh toán thành công',
          icon: 'success',
        }).then((result) => {
          if (result.isConfirmed) {
            sessionStorage.clear();
            location.assign('http://localhost:4200/');
          }
        });
        // Lấy ID hóa đơn từ phản hồi và thêm chi tiết hóa đơn
        this.getdataService
          .chitiethdb(res.id, this.cartItems)
          .subscribe({
            next: (response) => {
              console.log(response);
              // Xóa giỏ hàng cục bộ sau khi đã thanh toán
              this.cartItems = [];
            },
            error: (error) => {
              console.error('Lỗi khi lưu chi tiết hóa đơn:', error);
            },
          });
      },
    );
  }

  get f() {
    return this.checkout.controls;
  }

  ngOnInit(): void {
    this.ck = this.getdataService.getcarts();
  }
}
