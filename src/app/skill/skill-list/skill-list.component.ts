import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SkillService} from "../skill.service";
import {Skill} from "../skill"
import {fadeAnimation, listAnimation} from "../../app.animation";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {SkillDetailComponent} from "../skill-detail/skill-detail.component";

@Component({
  selector: 'skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.sass'],
  animations: [fadeAnimation],
})
export class SkillListComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'Skill List'
  skills: Skill[] = []
  searchText = ''
  loading: boolean = true
  error: any = undefined

  @ViewChild('searchInput') searchInput?: ElementRef

  constructor(private skillService: SkillService, private bottomSheet: MatBottomSheet) {

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

  clearSearchClick(event: any) {
    this.searchText = ''
    this.cacheSearchText()
  }

  cacheSearchText() {
    localStorage.setItem('skill_list_search_text', this.searchText)
  }

  loadSkills() {
    console.log('loading skills...')
    this.skillService.list({limit: 100}).subscribe(
      (data) => {
        console.log('got skills', data)
        this.skills = data.results
        this.loading = false
        this.error = undefined
      },
      (error) => {
        this.loading = false
        this.error = error
      }
    )
  }

  showSkillDetail(skill: Skill) {
    const bottomSheetRef = this.bottomSheet.open(SkillDetailComponent, {
      data: {skill: skill}
    });
  }
}
