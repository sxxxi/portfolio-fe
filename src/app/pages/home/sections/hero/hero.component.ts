import { Component, Input } from '@angular/core';
import { HeroLink } from './hero-link.model';
import { ImageButtonComponent } from '../../../../components/image-button/image-button.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'hero',
  standalone: true,
  imports: [ImageButtonComponent, NgFor],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() name: string = "";
  @Input() title: string = "";
  @Input() backgroundImageSrc: string = "";
  @Input() heroLinks: HeroLink[] = [];
}
