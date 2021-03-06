import {Component} from '@angular/core';
import {MatButtonToggleChange} from "@angular/material/button-toggle";
import {fadeAnimation} from "./app.animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'Skill Reference';
  currentSection = 'skills'
  sections = ['skills', 'projects']

  sectionChange(event: MatButtonToggleChange) {
    console.log('section changed', this.currentSection)
  }
}
