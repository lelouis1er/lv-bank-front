import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponentsModule } from "src/app/app.components.module";
import { CrmComponent } from "./crm.component";
import { CrmRoutingModule } from "./crm.routing";

@NgModule({
  imports : [
    CommonModule,
    AppComponentsModule,
    CrmRoutingModule
  ],
  exports : [],
  declarations : [
    CrmComponent
  ]
})
export class CrmModule{}
