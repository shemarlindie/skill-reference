import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {GLOBAL_MODULES} from "../global-modules";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";
import {ProjectService} from "./project.service";
import {ProjectListComponent} from "./project-list/project-list.component";

@NgModule({
  declarations: [
    ProjectDetailComponent,
    ProjectListComponent,
  ],
  imports: [
    CommonModule,
    GLOBAL_MODULES,
  ],
  exports: [
    ProjectDetailComponent,
    ProjectListComponent,
  ],
  providers: [ProjectService]
})
export class ProjectModule { }
