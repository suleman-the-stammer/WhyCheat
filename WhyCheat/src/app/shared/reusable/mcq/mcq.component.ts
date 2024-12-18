import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../../core/services/quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mcq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.scss']
})
export class McqComponent {
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
