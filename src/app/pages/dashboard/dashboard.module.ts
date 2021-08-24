import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponentsModule } from 'src/app/app.components.module';
import { DashboardRoutingModule } from 'src/app/pages/dashboard/dashboard.routing';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { HeaderSectionComponent } from 'src/app/components/header-section/header-section.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppComponentsModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
