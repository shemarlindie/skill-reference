import {NgModule} from "@angular/core";
import {FilterPipe} from "./pipes/filter.pipe";

@NgModule({
  declarations: [
    FilterPipe,
  ],
  imports: [],
  exports: [FilterPipe],
  providers: []
})
export class UtilsModule { }
