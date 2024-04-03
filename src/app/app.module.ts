import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { ClientModule } from './Modules/client/Client.module';
import { TemplateRoutingModule } from './layout/template/Template-routing.module';


import { AdminModule } from './Modules/admin/Admin.module';
import { TopbaComponent } from './layout/partials/admin/topba/topba.component';
import { TemplateModule } from './layout/template/Template.module';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  
  declarations: [
    AppComponent,

  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    AdminModule,
    TemplateRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
