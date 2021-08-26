import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponentsModule } from "src/app/app.components.module";
import { HeaderSectionModule } from "src/app/components/header-section/header-section.module";
import { AcceuilComponent } from "./acceuil.component";
import { AcceuilRoutingModule } from "./acceuil.routing";

@NgModule({
  imports : [
    CommonModule,
    AppComponentsModule,
    AcceuilRoutingModule,
    HeaderSectionModule
  ],
  exports : [],
  declarations : [AcceuilComponent]
})
export class AcceuilModule{}
