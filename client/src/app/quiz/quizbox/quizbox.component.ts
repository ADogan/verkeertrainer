import { Component } from '@angular/core';
import { IQuizOption } from './quiz-option.model';

@Component({
  selector: 'app-quiz-box',
  templateUrl: './quizbox.component.html',
  styleUrls: ['./quizbox.component.css']
})
export class QuizBoxComponent {
   option1: IQuizOption;
   option2: IQuizOption;
   option3: IQuizOption;
   option4: IQuizOption;

  clickedAnswer = function() {
    console.log('clicked answer' + this);
    console.log(this);
  };
}
