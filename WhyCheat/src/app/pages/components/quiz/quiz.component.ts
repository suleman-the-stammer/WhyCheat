import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../../shared/reusable/hero-section/hero-section.component";
import { CardComponent } from "../../../shared/reusable/card/card.component";
import { QuizService } from '../../../core/services/quiz.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [HeroSectionComponent, CardComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  heroImage = 'online-exam-internet-distance-school-test-banner-landing-page-clock-computer-screen-web-quiz-check-list-boxes-questionnaire-application-digital-education-online-exam-blue-background-vector.jpg';
  heroTitle = '';
  heroSubtitle = '';

  QuizData: any = []

  constructor(private QuizService: QuizService) { }
  ngOnInit() {
    this.QuizService.onFetchQuiz().subscribe((res: any) => {
      console.log(res)
      if (res) {
        console.log(res?.result)
        this.QuizData = res?.result
      } else {
        console.error(' failed:', res.message);
      }
    }
    )
    console.log("***************", this.QuizData);
  }

}
