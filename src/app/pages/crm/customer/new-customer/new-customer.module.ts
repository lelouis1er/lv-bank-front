import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponentsModule } from "src/app/app.components.module";
import { HeaderSectionModule } from "src/app/components/header-section/header-section.module";
import { NewCustomerComponent } from "./new-customer.component";
import { NewCustomerRoutingModule } from "./new-customer.routing";


@NgModule({
  imports : [
    CommonModule,
    AppComponentsModule,
    NewCustomerRoutingModule,
    HeaderSectionModule
  ],
  declarations : [NewCustomerComponent],
  exports: []
})
export class NewCustomerModule{}
