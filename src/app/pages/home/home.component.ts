import { Component } from '@angular/core';
import { AboutComponent } from './sections/about/about.component';
import { HeroComponent } from './sections/hero/hero.component';
import { EducationComponent } from './sections/education/education.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';
import { HeroLink } from './sections/hero/hero-link.model';
import { ProjectModel } from './sections/projects/project/project.model';

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

  aboutTitle: string = "About"
  aboutContent: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum, turpis sit amet volutpat vestibulum, tellus lectus mattis arcu, sit amet egestas justo odio sed nibh. Nulla facilisi. Phasellus id lacinia justo. Donec vitae vehicula metus, eu commodo risus. Fusce ac diam quis diam pretium ullamcorper. Ut sagittis libero libero, sit amet interdum mi molestie ullamcorper. Phasellus pharetra enim non ipsum porta consequat.";


  projects: ProjectModel[] = [
    {
      title: "Manhattan Project",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum, turpis sit amet volutpat vestibulum, tellus lectus mattis arcu, sit amet egestas justo odio sed nibh. Nulla facilisi. Phasellus id lacinia justo. Donec vitae vehicula metus, eu commodo risus. Fusce ac diam quis diam pretium ullamcorper. Ut sagittis libero libero, sit amet interdum mi molestie ullamcorper.",
      repoLink: "https://github.com/sxxxi",
      deployedLink: "",
      imageLinks: [
        // "assets/img/cat-sleep.jpg"
      ]
    },
    {
      title: "Manhattan Project",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      repoLink: "",
      deployedLink: "",
      imageLinks: [
        "assets/img/cat-sleep.jpg"
      ]
    },
    {
      title: "Manhattan Project",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum, turpis sit amet volutpat vestibulum, tellus lectus mattis arcu, sit amet egestas justo odio sed nibh. Nulla facilisi. Phasellus id lacinia justo. Donec vitae vehicula metus, eu commodo risus. Fusce ac diam quis diam pretium ullamcorper. Ut sagittis libero libero, sit amet interdum mi molestie ullamcorper.",
      repoLink: "https://github.com/sxxxi",
      deployedLink: "",
      imageLinks: [
        "assets/img/cat-sleep.jpg"
      ]
    },
    {
      title: "Manhattan Project",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum, turpis sit amet volutpat vestibulum, tellus lectus mattis arcu, sit amet egestas justo odio sed nibh. Nulla facilisi. Phasellus id lacinia justo. Donec vitae vehicula metus, eu commodo risus. Fusce ac diam quis diam pretium ullamcorper. Ut sagittis libero libero, sit amet interdum mi molestie ullamcorper.",
      repoLink: "https://github.com/sxxxi",
      deployedLink: "",
      imageLinks: [
        "assets/img/cat-sleep.jpg"
      ]
    },
  ]

}
