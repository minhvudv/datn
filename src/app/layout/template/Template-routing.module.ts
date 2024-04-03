
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutClientComponent } from './layout-client/layout-client.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Trang',
    },
    component: LayoutClientComponent,
    children: [
      {
        path: 'client',
        loadChildren: () =>
          import('../../Modules/client/Client.module').then(
            (x) => x.ClientModule
          ),
      },
    ],
  },
  {
    path: '',
    data: {
      title: 'Trang',
    },
    component: LayoutAdminComponent,
    children: [
      {
        path:'admin',
        loadChildren: () =>
          import('../../Modules/admin/Admin.module').then(
            (x) => x.AdminModule
          ),
      },
    ],
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateRoutingModule {}
