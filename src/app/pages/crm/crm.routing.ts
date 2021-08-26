import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGarde } from "src/app/gards/auth.garde";

const routes : Routes = [
  {
    path : '',
    redirectTo : 'start'
  },
  {
    path : 'start',
    loadChildren : () => import('src/app/pages/crm/acceuil/acceuil.module').then(m => m.AcceuilModule),
    canActivate : [AuthGarde]
  }
]

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class CrmRoutingModule{}
