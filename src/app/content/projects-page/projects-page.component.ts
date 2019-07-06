import { Component, OnInit } from '@angular/core';
import { ProjectsCardData } from 'src/app/projects-card-data';
import { projectsData } from 'src/app/projects-data';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  cards: ProjectsCardData[] = projectsData;
  constructor() { }

  ngOnInit() {
  }

}
