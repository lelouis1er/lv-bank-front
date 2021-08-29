import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponentsModule } from "src/app/app.components.module";
import { CustomerComponent } from "./customer.component";
import { CustomerRoutingModule } from "./customer.routing";

@NgModule({
  imports: [
    CommonModule,
    AppComponentsModule,
    CustomerRoutingModule
  ],
  exports : [],
  declarations : [
    CustomerComponent
  ]
})
export class CustomerModule{}
