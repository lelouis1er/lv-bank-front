import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgenceListComponent } from "./agence-list.component";

const routes : Routes = [
  {
    path : '',
    component : AgenceListComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class AgenceListRouting{}
