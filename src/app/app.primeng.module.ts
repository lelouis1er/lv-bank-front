import { NgModule } from "@angular/core";

import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { ToastModule } from "primeng/toast";
import { PanelModule } from "primeng/panel";
import { MegaMenuModule } from "primeng/megamenu";
import { TableModule } from "primeng/table";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { SidebarModule } from "primeng/sidebar";
import { InputTextareaModule } from "primeng/inputtextarea";
import { DynamicDialogModule } from "primeng/dynamicdialog"
import {ProgressSpinnerModule} from "primeng/progressspinner"

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    DynamicDialogModule,
    InputTextModule,
    InputTextareaModule,
    MegaMenuModule,
    OverlayPanelModule,
    PasswordModule,
    PanelModule,
    SidebarModule,
    TableModule,
    ToastModule,
    ProgressSpinnerModule
  ]
})
export class PrimengModule { }
