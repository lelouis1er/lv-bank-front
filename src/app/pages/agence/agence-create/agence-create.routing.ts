import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AgenceCreateComponent } from "./agence-create.component";

const routes : Routes = [
  {
    path : '',
    component : AgenceCreateComponent
  }
]

@NgModule (
  {
    imports : [
      RouterModule.forChild(routes)
    ],
    exports : [RouterModule]
  }
)
export class AgenceCreateRouting{}
