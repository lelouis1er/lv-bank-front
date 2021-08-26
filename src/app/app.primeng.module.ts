import { NgModule } from "@angular/core";

import { ButtonModule } from "primeng/button";
import { BreadcrumbModule } from "primeng/breadcrumb"
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { ToastModule } from "primeng/toast";
import { PanelModule } from "primeng/panel";
import { MegaMenuModule } from "primeng/megamenu";
import { MenubarModule } from "primeng/menubar";
import { TableModule } from "primeng/table";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { SidebarModule } from "primeng/sidebar";
import { DropdownModule } from "primeng/dropdown";
import { InputTextareaModule } from "primeng/inputtextarea";
import { DynamicDialogModule } from "primeng/dynamicdialog"
import { ProgressSpinnerModule } from "primeng/progressspinner"
import { DividerModule } from "primeng/divider"
import { TabViewModule } from "primeng/tabview"

@NgModule({
  exports: [
    ButtonModule,
    BreadcrumbModule,
    CardModule,
    DividerModule,
    DropdownModule,
    DynamicDialogModule,
    InputTextModule,
    InputTextareaModule,
    MenubarModule,
    MegaMenuModule,
    OverlayPanelModule,
    PasswordModule,
    PanelModule,
    SidebarModule,
    TableModule,
    ToastModule,
    TabViewModule,
    ProgressSpinnerModule
  ]
})
export class PrimengModule { }
