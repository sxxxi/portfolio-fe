import { Component, Input } from '@angular/core';

@Component({
  selector: 'about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @Input() title: string = "";
  @Input() content: string = "";
}
