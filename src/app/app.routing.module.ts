import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenceModule } from 'src/app/pages/agence/agence.module';
import { TemplateComponent } from './components/template.component';
import { AuthGarde } from './gards/auth.garde';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('src/app/pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'main',
    component: TemplateComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('src/app/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGarde]
      },
      {
        path : 'crm',
        loadChildren : () => import('src/app/pages/crm/crm.module').then(m => m.CrmModule),
        canActivate:[AuthGarde]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
