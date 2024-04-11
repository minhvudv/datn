import {NgModule} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CLientRoutingModule } from './Client-routing.module';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { LoaispComponent } from './loaisp/loaisp.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OrdersComponent } from './orders/orders.component';
@NgModule({
    declarations:[
    HomeComponent,
    ShopComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    DetailsComponent,
    LoaispComponent,
    CartComponent,
    CheckoutComponent,
    BlogdetailsComponent,
    LoginComponent,
    SignupComponent,
    OrdersComponent
  ],
    imports:[
        CLientRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule
    ]
})
export class ClientModule{}