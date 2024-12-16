import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../../shared/reusable/hero-section/hero-section.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeroSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  heroImage = 'signup-side-img.jpg';
  heroTitle = 'Welcome to the About';
  heroSubtitle = 'Discover amazing content!';

  img1:string='evaluation-exam-svgrepo-com.svg'
  img2:string='statistics-youtube-svgrepo-com.svg'
  img3:string='presentation-teacher-svgrepo-com.svg'
}
