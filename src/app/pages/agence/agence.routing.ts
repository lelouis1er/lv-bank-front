import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgenceComponent } from "./agence.component";

const route:Routes = [
  {
    path:'',
    redirectTo : 'list'
  },
  {
    path : 'list',
    component : AgenceComponent,
    loadChildren : () => import("src/app/pages/agence/agence-list/agence-list.module").then( m => m.AgenceListModule)
  },
  {
    path : "create",
    component : AgenceComponent,
    loadChildren : () => import("src/app/pages/agence/agence-create/agence-create.module").then(m => m.AgenceCreateModule)
  }
]

@NgModule(
  {
    imports: [RouterModule.forChild(route)],
    exports : [RouterModule]
  })
export class AgenceRoutingModule{}
