
import {NgModule} from '@angular/core';
import { LayoutClientComponent } from './layout-client/layout-client.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CLientRoutingModule } from 'src/app/Modules/client/Client-routing.module';
import { ClientModule } from 'src/app/Modules/client/Client.module';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { PartialModule } from '../partials/Partial.module';


@NgModule({ 
    declarations:[
    LayoutClientComponent,
    LayoutAdminComponent
  ],
    imports:[
  
        CommonModule,
        RouterModule,
        BrowserModule,
        CLientRoutingModule,
        ClientModule,
       PartialModule

    ]
}) 
export class TemplateModule{}