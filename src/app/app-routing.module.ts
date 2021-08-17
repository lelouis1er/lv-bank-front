import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './components/template.component';
import { AuthGarde } from './gards/auth.garde';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('src/app/pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'main',
    component: TemplateComponent,
    children: [{
      path: 'dashboard',
      loadChildren: () => import('src/app/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
      canActivate: [AuthGarde]
    },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
