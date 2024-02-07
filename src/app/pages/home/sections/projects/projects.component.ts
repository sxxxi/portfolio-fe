import { Component, Input } from '@angular/core';
import { ProjectModel } from './project/project.model';
import { ProjectComponent } from './project/project.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [ProjectComponent, NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() title: string = "";
  @Input() projects: ProjectModel[] = [];
}
