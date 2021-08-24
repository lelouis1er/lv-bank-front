import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponentsModule } from "src/app/app.components.module";
import { HeaderSectionComponent } from "src/app/components/header-section/header-section.component";
import { HeaderSectionModule } from "src/app/components/header-section/header-section.module";
import { AgenceListComponent } from "./agence-list.component";
import { AgenceListRouting } from "./agence-list.routing";

@NgModule({
  imports : [
    CommonModule,
    AppComponentsModule,
    HeaderSectionModule,
    AgenceListRouting
  ],
  declarations : [
    AgenceListComponent
  ],
  exports : []
})
export class AgenceListModule{}
