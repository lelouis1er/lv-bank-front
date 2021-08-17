import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserService } from './services/user.service';
import { MessageService } from 'primeng/api';
import { MenuComponent } from './components/menu/menu.component';
import { AppComponentsModule } from './app.components.module';
import { TemplateComponent } from './components/template.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppComponentsModule
  ],
  providers: [
    UserService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
