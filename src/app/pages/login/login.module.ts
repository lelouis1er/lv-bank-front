import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { LoginRoutingModule } from 'src/app/pages/login/login.routing';
import { AppComponentsModule } from 'src/app/app.components.module';
//import { HttpClient } from '@angular/common/http';

/*
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}*/

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    AppComponentsModule,
  ],
  declarations: [LoginComponent],
  exports: []
})
export class LoginModule { }
