import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-quizupload',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './quizupload.component.html',
  styleUrl: './quizupload.component.scss'
})
export class QuizuploadComponent {
//   private router = inject(Router);
// navigate(){
//   this.router.navigate(['uploadquizform']); 
//   console.log('hdgfgd')
// }
}
