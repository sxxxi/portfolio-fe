import { Component } from '@angular/core';
import { AboutComponent } from './sections/about/about.component';
import { HeroComponent } from './sections/hero/hero.component';
import { EducationComponent } from './sections/education/education.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';
import { HeroLink } from './sections/hero/hero-link.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, EducationComponent, ProjectsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name: string = "Seiji Akakabe";
  title: string = "Full-stack Software Developer";
  heroBackgroundImageSrc: string = "assets/img/cat-sleep.jpg"
  heroLinks: HeroLink[] = [
    {
      link: "https://ca.linkedin.com/in/seiji-akakabe",
      imageSrc: "assets/img/linkedin.png",
      width: 40
    },
    {
      link: "https://github.com/sxxxi",
      imageSrc: "assets/img/github-mark-white.svg",
      width: 35
    },
  ];



}
