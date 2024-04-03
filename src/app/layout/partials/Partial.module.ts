import {NgModule} from '@angular/core';
import { HeaderClientComponent } from './client/header-client/header-client.component';
import { FooterClientComponent } from './client/footer-client/footer-client.component'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FooterAdminComponent } from './admin/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { TopbaComponent } from './admin/topba/topba.component';
@NgModule({
    declarations:[
        
    
    HeaderClientComponent,
     FooterClientComponent,
     FooterAdminComponent,
     HeaderAdminComponent,
     TopbaComponent
  ],
    imports:[
        CommonModule,
        RouterModule,
        BrowserModule
    ],
    exports:[
        HeaderClientComponent,
        FooterClientComponent,
        FooterAdminComponent,
        HeaderAdminComponent,
        TopbaComponent
        

    ]

})
export class PartialModule { }