import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponentsModule } from "src/app/app.components.module";
import { AgenceComponent } from "./agence.component";
import { AgenceRoutingModule } from "./agence.routing";

@NgModule({
  imports : [
    CommonModule,
    AppComponentsModule,
    AgenceRoutingModule
  ],
  declarations : [
    AgenceComponent
  ],
  exports : []
})
export class AgenceModule{}
