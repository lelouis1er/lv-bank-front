import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PrimengModule } from "./app.primeng.module";

@NgModule({
  imports: [],
  exports : [
    PrimengModule,
    FormsModule
  ],
  declarations: []
})
export class AppComponentsModule {}
