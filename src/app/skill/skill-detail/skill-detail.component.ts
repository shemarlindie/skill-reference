import {Component, Inject, OnInit} from '@angular/core';

import {Skill} from "../skill"
import {Project} from "../../project/project";
import {ProjectService} from "../../project/project.service";
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheet} from "@angular/material/bottom-sheet";
import {MatDialog} from "@angular/material/dialog";
import {ProjectDetailComponent} from "../../project/project-detail/project-detail.component";
import {fadeAnimation} from "../../app.animation";

@Component({
  selector: 'skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.sass'],
  animations: [fadeAnimation],
})
export class SkillDetailComponent implements OnInit {
  skill: Skill
  projects: Project[] = []
  loading: boolean = true
  error: any = undefined

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: {skill: Skill},
    private projectService: ProjectService,
    private dialog: MatDialog,
    private sheet: MatBottomSheet
  ) {
    this.skill = data.skill
  }

  ngOnInit(): void {
    console.log('ngOnInit')
    this.loadProjects()
  }

  loadProjects() {
    console.log('loading projects for skill...', this.skill.name)

    const params = { skills: this.skill.id }
    this.projectService.list(params).subscribe(
      (data) => {
        console.log('got skill projects', data)
        this.projects = data.results
        this.error = undefined
        this.loading = false
      },
      (error) => {
        this.error = error
        this.loading = false
      }
    )
  }

  showProjectDetail(project: Project) {
    console.log('details for project', project)
    this.dialog.open(ProjectDetailComponent, {data: {project: project}})
  }

  dismissSheet() {
    this.sheet.dismiss()
  }
}
