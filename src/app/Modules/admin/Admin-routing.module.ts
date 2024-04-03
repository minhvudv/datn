import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeAdminComponent } from './home-admin/home-admin.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { LoaisanphamComponent } from './loaisanpham/loaisanpham.component';
import { BlogComponent } from './blog/blog.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { NhacungcapComponent } from './nhacungcap/nhacungcap.component';
import { HoadonbanComponent } from './hoadonban/hoadonban.component';
import { HoadonnhhapComponent } from './hoadonnhhap/hoadonnhhap.component';
import { ChitiethdbComponent } from './chitiethdb/chitiethdb.component';
import { ChitiethdnComponent } from './chitiethdn/chitiethdn.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { AccountComponent } from './account/account.component';
import { ThemsanphamComponent } from './themsanpham/themsanpham.component';
import { SuasanphamComponent } from './suasanpham/suasanpham.component';
import { ThemloaispComponent } from './themloaisp/themloaisp.component';
import { SualoaispComponent } from './sualoaisp/sualoaisp.component';
import { ThemblogComponent } from './themblog/themblog.component';
import { SuablogComponent } from './suablog/suablog.component';
import { SuahoadonbanComponent } from './suahoadonban/suahoadonban.component';
import { SuachitiethdbComponent } from './suachitiethdb/suachitiethdb.component';


const routes: Routes = [
  
{
    path:'home-admin',
    component:HomeAdminComponent
   
},
{
  path:'sanphamadmin',
  component:SanphamComponent
 
},
{
  path:'loaisanphamadmin',
  component:LoaisanphamComponent
 
},
{
  path:'blogadmin',
  component:BlogComponent
 
},
{
  path:'gioithieuadmin',
  component:GioithieuComponent
 
},
{
  path:'nhacungcap',
  component:NhacungcapComponent
 
},
{
  path:'hoadonban',
  component:HoadonbanComponent
 
},
{
  path:'hoadonnhap',
  component:HoadonnhhapComponent
 
},
{
  path:'chitiethdb',
  component:ChitiethdbComponent
 
},
{
  path:'chitiethdn',
  component:ChitiethdnComponent
 
},
{
  path:'khachhang',
  component:KhachhangComponent
 
},
{
  path:'nhanvien',
  component:NhanvienComponent
 
},
{
  path:'account',
  component:AccountComponent
 
},
{
  path:'themsanpham',
  component:ThemsanphamComponent
 
},
{
  path:'suasanpham/:id',
  component:SuasanphamComponent
 
},
{
  path:'themloaisp',
  component:ThemloaispComponent
 
},
{
  path:'sualoaisp/:id',
  component:SualoaispComponent
 
},
{
  path:'themblog',
  component:ThemblogComponent
 
},
{
  path:'suablog/:id',
  component:SuablogComponent
 
},
{
  path:'suahoadonban/:id',
  component:SuahoadonbanComponent
 
},
{
  path:'suacthdb/:id',
  component:SuachitiethdbComponent
 
},




  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
