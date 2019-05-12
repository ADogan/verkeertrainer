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

  clickedAnswer(quizOption) {
    const correct = this.checkAnswer(quizOption.code);
    this.feedbackTime(quizOption);
  }
  checkAnswer(clickedSignCode: string): boolean {
    // throw new Error("Method not implemented.");
    if ( clickedSignCode === this.correctSign.code ) {
      return true;
    } else {
      return false;
    }
  }
  feedbackTime(quizOption) {
    this.showFeedback(quizOption);
    // console.log('let\'s wait, shall we?');
    // setTimeout(() => {  this.newQuestion(); }, 10000);
  }
  nextQuestion() {
    this.newQuestion();
  }

  showFeedback(quizOption) {
    this.showContinueButton = true;
    this.quizOptions.every(element => {
      if (element.code === this.correctSign.code ) {
        element.status = 'correct';
      } else if (element.code === quizOption.code ) {
        element.status = 'chosenIncorrect';
      } else {
        element.status = 'incorrect';
      }
      return true;
    });
  }

  ngOnInit() {
    this.newQuestion();
  }

  newQuestion() {
    this.showContinueButton = false;

   this.resetQuizOptionsAvailablePositions();
    this.quizOptions = [ { code: 'A1', description: 'A1.', status: 'unset'
      }, { code: 'A2', description: 'A2.', status: 'unset'
      }, { code: 'A3', description: 'A3.', status: 'unset'
      }, { code: 'A4', description: 'A4.', status: 'unset' }];

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
    // make check if size of quizOptionsAvailablePositions is 1
    // if yes, then pop that as the next index instead of looking for a new unique random number
    let randomNumberAvailable = false;
    let randomNumber: number;
    this.isRandomNumberAvailableInQuizOptions(randomNumber);
    let i = 0;

    while (!randomNumberAvailable) {
      console.log('attempt to find a random available number ' + ++i);
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
