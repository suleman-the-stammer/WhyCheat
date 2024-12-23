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
  QuizData: any = {}


  ngOnInit(): void {
    this.QuizData = history.state.quizData;
    console.log('Quiz Data: ------------------------ ', this.QuizData);
  }
}
