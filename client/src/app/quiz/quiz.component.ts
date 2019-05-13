import { Component, OnInit } from '@angular/core';
import { IQuizOption } from './quiz-option.model';
import { TrafficSignsService } from '../services/traffic-signs.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizOptions: IQuizOption[];
  quizOptionsAvailablePositions: number[] = [ 0, 1, 2, 3 ];
  currentSignImageFileName: string;
  correctSign;
  feedbackPeriod = false;
  showContinueButton = false;
  questionNumber = 0;
  feedbackWaitTimeInMs = 4000;
  timeoutTimer;

  /*
    Methods called from outside this class:
  */
  constructor(private trafficSignsService: TrafficSignsService ) {}

  ngOnInit() {
    this.newQuestion();
  }

  clickedAnswer(quizOption) {
    if (!this.feedbackPeriod) {
      this.feedbackPeriod = true;
      const correct = this.checkAnswer(quizOption.code);
      this.feedbackTime(quizOption);
    } else {
      console.log(this.feedbackPeriod);
    }
  }

  /*
    Methods only called from inside this class
  */

  checkAnswer(clickedSignCode: string): boolean {
    // throw new Error("Method not implemented.");
    if ( clickedSignCode === this.correctSign.code ) {
      return true;
    } else {
      return false;
    }
  }
  feedbackTime(quizOption: IQuizOption) {
    console.log('start feedback');
    this.showFeedback(quizOption);
    this.setTimeoutTimer();
  }
  nextQuestion() {
    this.newQuestion();
  }

  setTimeoutTimer() {
    this.timeoutTimer = setTimeout(() => {
      if (this.feedbackPeriod) {
        this.newQuestion();
      } else {
        console.log('timer over but feedbackperiod is false, so the user must have pressed continue.')
      }
    }, this.feedbackWaitTimeInMs);
  }

  clearTimeoutTimer() {
    clearTimeout(this.timeoutTimer);
  }

  showFeedback(quizOption: IQuizOption) {
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

  newQuestion() {
    this.feedbackPeriod = false;
    this.clearTimeoutTimer();
    this.questionNumber++;

    this.resetQuizOptions();
    this.setCorrectSignInQuizOptions();
    this.setIncorrectOptionInQuizOptions();
    this.setIncorrectOptionInQuizOptions();
    this.setIncorrectOptionInQuizOptions();

    this.showContinueButton = false;
  }
  resetQuizOptions() {
    this.quizOptions = [ { code: 'A1', description: 'A1.', status: 'unset'
      }, { code: 'A2', description: 'A2.', status: 'unset'
      }, { code: 'A3', description: 'A3.', status: 'unset'
      }, { code: 'A4', description: 'A4.', status: 'unset' }];
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
