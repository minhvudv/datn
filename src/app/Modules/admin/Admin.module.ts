import {NgModule} from '@angular/core';

import { CommonModule } from '@angular/common';




import { AdminRoutingModule } from './Admin-routing.module';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { LoaisanphamComponent } from './loaisanpham/loaisanpham.component';
import { BlogComponent } from './blog/blog.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { NhacungcapComponent } from './nhacungcap/nhacungcap.component';
import { HoadonbanComponent } from './hoadonban/hoadonban.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HoadonnhhapComponent } from './hoadonnhhap/hoadonnhhap.component';
import { ChitiethdbComponent } from './chitiethdb/chitiethdb.component';
import { ChitiethdnComponent } from './chitiethdn/chitiethdn.component';
import { AccountComponent } from './account/account.component';
import { ThemsanphamComponent } from './themsanpham/themsanpham.component';
import { SuasanphamComponent } from './suasanpham/suasanpham.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemloaispComponent } from './themloaisp/themloaisp.component';
import { SualoaispComponent } from './sualoaisp/sualoaisp.component';
import { ThemblogComponent } from './themblog/themblog.component';
import { SuablogComponent } from './suablog/suablog.component';
import { SuahoadonbanComponent } from './suahoadonban/suahoadonban.component';
import { SuachitiethdbComponent } from './suachitiethdb/suachitiethdb.component';
@NgModule({
    declarations:[

    HomeAdminComponent,
      SanphamComponent,
      LoaisanphamComponent,
      BlogComponent,
      GioithieuComponent,
      KhachhangComponent,
      NhanvienComponent,
      NhacungcapComponent,
      HoadonbanComponent,
      HoadonnhhapComponent,
      ChitiethdbComponent,
      ChitiethdnComponent,
      AccountComponent,
      ThemsanphamComponent,
      SuasanphamComponent,
      ThemloaispComponent,
      SualoaispComponent,
      ThemblogComponent,
      SuablogComponent,
      SuahoadonbanComponent,
      SuachitiethdbComponent
   
  ],
    imports:[
        AdminRoutingModule,
        CommonModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class AdminModule{}