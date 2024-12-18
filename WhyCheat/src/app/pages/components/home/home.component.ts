import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../../shared/reusable/hero-section/hero-section.component";
import { CardComponent } from "../../../shared/reusable/card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, CardComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  heroImage = 'signup-side-img.jpg';
  heroTitle = 'Welcome to the Home Page';
  heroSubtitle = 'Discover amazing content!';

  img1:string='evaluation-exam-svgrepo-com.svg'
  img2:string='statistics-youtube-svgrepo-com.svg'
  img3:string='presentation-teacher-svgrepo-com.svg'

}
