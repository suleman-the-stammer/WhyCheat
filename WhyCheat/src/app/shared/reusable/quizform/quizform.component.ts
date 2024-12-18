import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { QuizService } from '../../../core/services/quiz.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quizform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './quizform.component.html',
  styleUrls: ['./quizform.component.scss']
})
export class QuizformComponent {

  quizData: any = {
    title: '',
    type: '',
  };

  questions: any = [];

  constructor(
    public dialog: MatDialog,
    private quizservice: QuizService
  ) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: { message: 'Hello from the parent component!' }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.questions.push(result); // Add the new question to the questions array
      }
    });
  }

  onSave() {
    let Payload = {
      title: this.quizData.title,
      type: this.quizData.type,
      questions: this.questions
    }
    this.quizservice.onCreateQuiz({ ...this.quizData, questions: this.questions }).subscribe((res: any) => {
      console.log(res);
      if (res) {
        console.log(res);
      } else {
        console.error('Signup failed:', res.message);
      }
    });
  }
}
