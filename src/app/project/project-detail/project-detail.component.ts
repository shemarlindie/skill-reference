import {Component, Inject, OnInit} from '@angular/core';

import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Project} from "../project";
import {ProjectService} from "../project.service";
import {fadeAnimation} from "../../app.animation";

@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.sass'],
  animations: [fadeAnimation],
})
export class ProjectDetailComponent implements OnInit {
  project?: Project
  projectId: number

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {projectId: number},
    private projectService: ProjectService
  ) {
    this.projectId = data.projectId
  }

  ngOnInit(): void {
    console.log('ngOnInit')
    this.loadProject()
  }

  loadProject() {
    console.log('loading project...', this.projectId)

    this.projectService.get(this.projectId).subscribe((data) => {
      console.log('got project', data)
      this.project = data
    })
  }
}
