import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }
  onCreateQuiz(obj: any) {
    let Token = localStorage.getItem("token")
    return this.http.post('http://localhost:3000/api/quiz/createQuiz', obj, { headers: { "authrization": `Bearer ${Token}` } });
  }

  onFetchQuiz() {
    let Token = localStorage.getItem("token")
    return this.http.get('http://localhost:3000/api/quiz/', { headers: { "authrization": `Bearer ${Token}` } });
  }

}
