import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewCustomerComponent } from "./new-customer.component";


const routes : Routes = [
  {
    path : '',
    component : NewCustomerComponent
  }
];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class NewCustomerRoutingModule{}
