import {Component, Inject, OnInit} from '@angular/core';

import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Project} from "../project";
import {ProjectService} from "../project.service";

@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.sass'],
})
export class ProjectDetailComponent implements OnInit {
  project: Project

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {project: Project},
    private projectService: ProjectService
  ) {
    this.project = data.project
  }

  ngOnInit(): void {
    console.log('ngOnInit')
    // this.loadProject()
  }

  loadProject() {
    console.log('loading project...', this.project.id)

    this.projectService.get(this.project.id).subscribe((data) => {
      console.log('got project', data)
      this.project = data
    })
  }
}
