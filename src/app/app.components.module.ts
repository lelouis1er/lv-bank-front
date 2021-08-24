import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PrimengModule } from "./app.primeng.module";

@NgModule({
  imports: [],
  exports : [
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
  ]
})
export class AppComponentsModule {}
