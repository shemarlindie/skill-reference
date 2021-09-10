import { NgModule } from '@angular/core';
import {SkillListComponent} from "./skill-list.component";
import {SkillService} from "./skill.service";
import {CommonModule} from "@angular/common";
import {GLOBAL_MODULES} from "../global-modules";
import {ProjectService} from "./project.service";
import {FilterPipe} from "./filter.pipe";

@NgModule({
  declarations: [
    SkillListComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    GLOBAL_MODULES
  ],
  exports: [
    SkillListComponent
  ],
  providers: [SkillService, ProjectService]
})
export class SkillModule { }
