import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { IQuiz } from 'src/app/models/quiz.model';

@Component({
    templateUrl: 'home.component.html' ,
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    quizzes: IQuiz[];
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizzes = this.quizService.getAllQuizzes();
  }
}
