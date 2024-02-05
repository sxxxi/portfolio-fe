import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-button',
  standalone: true,
  imports: [],
  templateUrl: './image-button.component.html',
  styleUrl: './image-button.component.scss'
})
export class ImageButtonComponent {
  @Input() href!: string;
  @Input() src!: string;
  @Input() width: number = 55;
}
