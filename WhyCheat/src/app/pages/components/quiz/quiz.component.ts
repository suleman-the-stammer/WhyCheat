import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../../shared/reusable/hero-section/hero-section.component";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [HeroSectionComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  heroImage = 'signup-side-img.jpg';
  heroTitle = 'Welcome to the Quiz Page';
  heroSubtitle = 'Discover amazing content!';
}
