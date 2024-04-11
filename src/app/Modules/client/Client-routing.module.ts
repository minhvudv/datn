import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoaispComponent } from './loaisp/loaisp.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  
{
    path:'Home',
    component:HomeComponent,

},
{
  path:'shop',
  component:ShopComponent,

},
{
  path:'about',
  component:AboutComponent,

},
{
  path:'blog',
  component:BlogComponent,

},
{
  path:'contact',
  component:ContactComponent,
 
},
{
  path:'cart',
  component:CartComponent,
 
},
{
  path:'checkout',
  component:CheckoutComponent,
 
},
{
  path:'details/:id',
  component:DetailsComponent,

},
{
  path:'loaisp/:id',
  component:LoaispComponent,

},

{
  path:'blogdetails/:id',
  component:BlogdetailsComponent,

},
{
  path:'login',
  component:LoginComponent,

},
{
  path:'signup',
  component:SignupComponent,

},
{
  path:'orders',
  component:OrdersComponent,

},

  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CLientRoutingModule { }
