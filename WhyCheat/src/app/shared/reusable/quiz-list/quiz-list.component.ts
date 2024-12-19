import { Component } from '@angular/core';
import { QuizService } from '../../../core/services/quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.scss'
})
export class QuizListComponent {
quizData: any[]=[];


  constructor(private QuizService: QuizService) { }
  ngOnInit() {
    this.QuizService.onFetchQuiz().subscribe((res: any) => {
      console.log(res)
      if (res) {
        console.log(res?.result)
        this.quizData = res?.result;
      } else {
        console.error(' failed:', res.message);
      }
    }
    )
    console.log("***************", this.quizData);
  }
}
