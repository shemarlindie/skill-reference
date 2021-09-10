import { NgModule } from '@angular/core';
import {SkillListComponent} from "./skill-list/skill-list.component";
import {SkillService} from "./skill.service";
import {CommonModule} from "@angular/common";
import {GLOBAL_MODULES} from "../global-modules";
import {ProjectService} from "../project/project.service";
import {SkillDetailComponent} from "./skill-detail/skill-detail.component";

@NgModule({
  declarations: [
    SkillListComponent,
    SkillDetailComponent,
  ],
  imports: [
    CommonModule,
    GLOBAL_MODULES,
  ],
  exports: [
    SkillListComponent,
    SkillDetailComponent,
  ],
  providers: [SkillService, ProjectService]
})
export class SkillModule { }
