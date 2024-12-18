import { Component, inject, Input } from '@angular/core';
import { QuizService } from '../../../core/services/quiz.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  
})

export class CardComponent {
  private router = inject(Router)
  @Input() data: any[] = [];

  onClick(quiz: any) {
    // this.router.navigateByUrl('/mcq', { state: { quiz } });
    this.router.navigateByUrl('/mcq');
  }
}
