import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponentsModule } from "src/app/app.components.module";
import { HeaderSectionComponent } from "src/app/components/header-section/header-section.component";
import { HeaderSectionModule } from "src/app/components/header-section/header-section.module";
import { AgenceCreateComponent } from "./agence-create.component";
import { AgenceCreateRouting } from "./agence-create.routing";

@NgModule(
  {
    imports : [
      CommonModule,
      AppComponentsModule,
      AgenceCreateRouting,
      HeaderSectionModule
    ],
    exports : [],
    declarations : [AgenceCreateComponent]
  }
)
export class AgenceCreateModule{}
