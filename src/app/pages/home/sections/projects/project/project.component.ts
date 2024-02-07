import { Component, Input } from '@angular/core';
import { ProjectModel } from './project.model';
import { NgFor, NgIf } from '@angular/common';
import { ImageButtonComponent } from '../../../../../components/image-button/image-button.component';

@Component({
  selector: 'project',
  standalone: true,
  imports: [NgIf, NgFor, ImageButtonComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project?: ProjectModel;
}
