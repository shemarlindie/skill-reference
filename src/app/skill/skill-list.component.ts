import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SkillService} from "./skill.service";
import {Skill} from "./skill"
import {fadeAnimation, listAnimation} from "../app.animation";

@Component({
  selector: 'skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.sass'],
  animations: [fadeAnimation, listAnimation]
})
export class SkillListComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'Skill List'
  skills: Skill[] = []
  searchText = ''

  @ViewChild('searchInput') searchInput?: ElementRef

  constructor(public skillService: SkillService) {

  }

  ngOnInit(): void {
    console.log('ngOnInit')
    this.searchText = localStorage.getItem('skill_list_search_text') || ''
    this.loadSkills()
  }

  ngOnDestroy(): void {
    localStorage.setItem('skill_list_search_text', this.searchText)
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
    this.focusSearch()
  }

  focusSearch() {
    if (this.searchInput) {
      this.searchInput.nativeElement.focus()
    }
  }

  searchInputChange(event: any) {
    // console.log('filter', event)
  }

  clearSearchClick(event: any) {
    this.searchText = ''
    this.cacheSearchText()
  }

  cacheSearchText() {
    localStorage.setItem('skill_list_search_text', this.searchText)
  }

  loadSkills() {
    console.log('loading skills...')
    this.skillService.list().subscribe((data) => {
      console.log('got skills', data)
      this.skills = data.results
    })
  }

  loadSkillProjects(skill: Skill) {

  }
}
