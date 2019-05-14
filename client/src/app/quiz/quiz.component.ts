import { Component, OnInit } from '@angular/core';
import { IQuizOption } from './quiz-option.model';
import { TrafficSignsService } from '../services/traffic-signs.service';
import { ITrafficSign } from '../services/traffic-sign.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizOptions: IQuizOption[];
  quizOptionsAvailablePositions: number[];
  currentSignImageFileName: string;
  correctSign: ITrafficSign;
  feedbackPeriod = false;
  showContinueButton = false;

  // timeoutTimer should be of type number or Timer. Trouble with setting the Timer object.
  // Not very important, so keeping it at 'any' at the moment.
  timeoutTimer: any;

  questionNumber: number;
  feedbackWaitTimeInMs: number;
  maxAmountOfChoices: number;

  /*
    Methods called from outside this class:
  */
  constructor(private trafficSignsService: TrafficSignsService ) {
    this.questionNumber = 0;
    this.feedbackWaitTimeInMs = 4000;
    this.maxAmountOfChoices = 4;
  }

  ngOnInit() {
    this.newQuestion();
  }

  clickedAnswer(quizOption: IQuizOption) {
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
        console.log('timer is over but feedbackperiod is false, so the user must have pressed continue.');
      }
    }, this.feedbackWaitTimeInMs);
  }

  clearTimeoutTimer() {
    clearTimeout(this.timeoutTimer);
  }

  showFeedback(quizOption: IQuizOption) {
    this.showContinueButton = true;
    this.quizOptions.every(element => {

      if (element.code === quizOption.code) {
        if (element.code === this.correctSign.code) {
          element.status = 'correct_chosen';
        } else {
          element.status = 'incorrect_chosen';
        }
      } else {
        if (element.code === this.correctSign.code) {
          element.status = 'correct_not_chosen';
        } else {
          element.status = 'incorrect_not_chosen';
        }
      }
      return true;
    });
  }

  newQuestion() {
    this.feedbackPeriod = false;
    this.clearTimeoutTimer();
    this.questionNumber++;

    this.resetQuizOptions();
    this.showContinueButton = false;

    this.setCorrectSignInQuizOptions();

    // start i with 1 because we have already set an option; the correctSign
    for (let i = 1; i < this.maxAmountOfChoices; i++) {
      this.setIncorrectOptionInQuizOptions();
    }
  }

  resetQuizOptions() {
    this.quizOptions = [];
    this.quizOptionsAvailablePositions = [];
      for (let i = 0; i < this.maxAmountOfChoices; i++) {
        this.quizOptionsAvailablePositions.push(i);

        const quizOption: IQuizOption = { code: 'XZY' + i, description: 'XZY.' + i, status: 'unset' };
        this.quizOptions.push(quizOption);
      }
  }

  setCorrectSignInQuizOptions() {
    const sign: ITrafficSign = this.setOptionInQuizOptions();
    this.correctSign = sign;
    this.currentSignImageFileName = sign.image.filename;
  }

  setIncorrectOptionInQuizOptions() {
    this.setOptionInQuizOptions();
  }

  setOptionInQuizOptions() {
    let currentSign: ITrafficSign;
    let signAlreadyPresent = true;

    do {
      currentSign = this.trafficSignsService.getRandomTrafficSign();
      signAlreadyPresent = this.signIsAlreadyPresentAsAnOption(currentSign);
      console.log('sign not present???');
    } while (signAlreadyPresent);

    const answerPosition = this.getUniqueRandomNumberBelowMaxAmountOfChoices();
    this.setSignAsOption(currentSign, answerPosition);
    return currentSign;
  }

  signIsAlreadyPresentAsAnOption(sign: ITrafficSign): boolean {
    /* Because this check compares the sign descriptions, it looks like no 2 signs with the same description can be
    added in the list of signs. They can still be added, should not be a problem. Beause this function is returning
    true when possibly 2 signs are found with the same description, the app will look for a new sign to present to
    the user. The benefit of not showing 2 descriptions that are the same to the user majorly outweighs the chance
    of showing both choices in a question (for the purpose of randomness??).
    */
    this.quizOptions.every( element => {
      if (element.description === sign.description) {
        // Sign is present
        return true;
      }
    });
    return false;
  }

  setSignAsOption(sign: ITrafficSign, quizoptionsIndex: number) {
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

  getUniqueRandomNumberBelowMaxAmountOfChoices() {
    // make check if size of quizOptionsAvailablePositions is 1
    // if yes, then pop that as the next index instead of looking for a new unique random number
    // This should save a little bit of cpu time.
    let randomNumberAvailable = false;
    let randomNumber: number;
    let i = 0;

    while (!randomNumberAvailable) {
      console.log('attempt to find a random available number ' + ++i);
      randomNumber = this.getRandomNumberBelowMaxAmountOfChoices();
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

   getRandomNumberBelowMaxAmountOfChoices() {
    const randomNumber = Math.floor(Math.random() * this.maxAmountOfChoices);
    return randomNumber;
  }
}
