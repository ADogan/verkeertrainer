import { Component, OnInit } from '@angular/core';
import { IQuizOption } from './quiz-option.model';
import { TrafficSignsService } from '../services/traffic-signs.service';
import { RecursiveAstVisitor } from '@angular/compiler';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private trafficSignsService: TrafficSignsService ) {}
   quizOptions: IQuizOption[];
   quizOptionsAvailablePositions: number[] = [ 0, 1, 2, 3 ];
   currentSignImageFileName: string;
   correctSign;
   showContinueButton = false;

  clickedAnswer() {
    const clickedSignCode = 'A1';
    const correct = this.checkAnswer(clickedSignCode);
    console.log('your answer is: '  + correct);
    this.feedbackTime();
  }
  checkAnswer(clickedSignCode: string): boolean {
    // throw new Error("Method not implemented.");
    if ( clickedSignCode === this.correctSign.code ) {
      return true;
    } else {
      return false;
    }
  }
  feedbackTime() {
    this.showFeedback();
    console.log('let\'s wait, shall we?');
    setTimeout(() => {  this.newQuestion(); }, 4000);
  }

  showFeedback() {
    this.showContinueButton = true;
  }

  ngOnInit() {
    this.newQuestion();
  }

  newQuestion() {
    this.showContinueButton = false;

   this.resetQuizOptionsAvailablePositions();
    this.quizOptions = [ { code: 'A1', description: 'A1.'
      }, { code: 'A2', description: 'A2.'
      }, { code: 'A3', description: 'A3.'
      }, { code: 'A4', description: 'A4.' }];

    this.setCorrectSignInQuizOptions();
    this.setIncorrectOptionInQuizOptions();
    this.setIncorrectOptionInQuizOptions();
    this.setIncorrectOptionInQuizOptions();

  }
  resetQuizOptionsAvailablePositions() {
    this.quizOptionsAvailablePositions = [ 0, 1, 2, 3 ];
  }

  setCorrectSignInQuizOptions() {
    const sign = this.setOptionInQuizOptions();
    this.correctSign = sign;
    this.currentSignImageFileName = sign.image.filename;
    console.log("correct sign is set!");
  }

  setIncorrectOptionInQuizOptions() {
    this.setOptionInQuizOptions();
  }

  setOptionInQuizOptions() {
    const currentSign = this.trafficSignsService.getRandomTrafficSign();
    const answerPosition = this.getUniqueRandomNumberBelow4();
    this.setSignAsOption(currentSign, answerPosition);
    return currentSign;
  }

  setSignAsOption(sign: any, quizoptionsIndex: number) {
    console.log('setting to position: ' + quizoptionsIndex);
    this.quizOptions[quizoptionsIndex].description = sign.description;
    this.quizOptions[quizoptionsIndex].code = sign.code;
    this.removeFromAvailableOptionPositions(quizoptionsIndex);
  }
  removeFromAvailableOptionPositions(quizoptionsIndex: any) {
    const indexInAvailablePositions = this.quizOptionsAvailablePositions.indexOf(quizoptionsIndex);
    if (!(indexInAvailablePositions === -1)) {
      this.quizOptionsAvailablePositions.splice(indexInAvailablePositions, 1);
    }
  }

  getUniqueRandomNumberBelow4() {
    let randomNumberAvailable = false;
    let randomNumber: number;
    this.isRandomNumberAvailableInQuizOptions(randomNumber);
    let i = 0;

    while (!randomNumberAvailable) {
      console.log('attempt' + ++i);
      randomNumber = this.getRandomNumberBelow4();
      randomNumberAvailable = this.isRandomNumberAvailableInQuizOptions(randomNumber);
    }
    return randomNumber;
  }

  isRandomNumberAvailableInQuizOptions( randomNumber: number): boolean {
    const randomNumberIndex = this.quizOptionsAvailablePositions.indexOf(randomNumber);
    const randomNumberNotPresent = randomNumberIndex === -1;

    if (randomNumberNotPresent) {
      return false;
    } else {
      return true;
    }
  }

   getRandomNumberBelow4() {
    const randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
  }
}
