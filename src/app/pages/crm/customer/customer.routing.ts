import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

 const routes : Routes = [
   {
     path:'new',
     loadChildren : () => import('src/app/pages/crm/customer/new-customer/new-customer.module').then(m=>m.NewCustomerModule)
   }
 ];

 @NgModule({
   imports:[RouterModule.forChild(routes)],
   exports:[RouterModule]
 })
 export class CustomerRoutingModule{}
