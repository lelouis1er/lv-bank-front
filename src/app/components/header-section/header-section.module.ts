import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponentsModule } from 'src/app/app.components.module';
import { HeaderSectionComponent } from './header-section.component';


@NgModule({
  imports : [
    CommonModule,
    AppComponentsModule
  ], declarations : [
    HeaderSectionComponent
  ],
  exports : [
    HeaderSectionComponent
  ]
})
export class HeaderSectionModule { }
