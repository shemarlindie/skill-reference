import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Project} from "../project";
import {ProjectService} from "../project.service";
import {ProjectDetailComponent} from "../project-detail/project-detail.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.sass'],
})
export class ProjectListComponent implements OnInit, AfterViewInit, OnDestroy {
  projects: Project[] = []
  searchText = ''

  @ViewChild('searchInput') searchInput?: ElementRef

  constructor(private projectService: ProjectService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    console.log('ngOnInit')
    this.searchText = localStorage.getItem('project_list_search_text') || ''
    this.loadProjects()
  }

  ngOnDestroy(): void {
    localStorage.setItem('project_list_search_text', this.searchText)
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
    // this.focusSearch()
  }

  focusSearch() {
    if (this.searchInput) {
      this.searchInput.nativeElement.focus()
    }
  }

  clearSearchClick(event: any) {
    this.searchText = ''
    this.cacheSearchText()
  }

  cacheSearchText() {
    localStorage.setItem('project_list_search_text', this.searchText)
  }

  loadProjects() {
    console.log('loading projects...')
    this.projectService.list({limit: 100}).subscribe((data) => {
      console.log('got projects', data)
      this.projects = data.results
    })
  }

  showProjectDetail(project: Project) {
    const dialogRef = this.dialog.open(ProjectDetailComponent, {
      data: {project: project}
    });
  }
}
