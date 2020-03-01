import { Injectable, OnInit } from '@angular/core';
import { TrafficSignsService } from './traffic-signs.service';
import { ITrafficSign } from '../models/traffic-sign.model';
import { IQuiz } from '../models/quiz.model';
import { ExamStatsService, ExamStatsActions } from './exam-stats/exam-stats.service';
import { pipe, Observable } from 'rxjs';


const QUIZZES: IQuiz[] = [];


@Injectable()
export class QuizService implements OnInit {

    constructor(private trafficSignsService: TrafficSignsService, private examStatsService: ExamStatsService) {}
        all_traffic_signs: ITrafficSign[] ;

    ngOnInit() {
        this.all_traffic_signs = this.trafficSignsService.getTrafficSigns();
    }

    newQuiz(startDateArg: Date): number {
        const newQuizId = this.getNewQuizId();

        const newQuiz = {
            id: newQuizId,
            startDate: startDateArg,
            correct: {
                signs: [],
            },
            incorrect: {
                signs: [],
            }
        };
        QUIZZES.push(newQuiz);
        this.updateStatisticsApi(ExamStatsActions.STARTED);
        return newQuizId;
    }

  updateStatisticsApi(statType: ExamStatsActions) {
    let postresult: Observable<boolean>;
    if (statType === ExamStatsActions.STARTED) {
        postresult = this.examStatsService.postQuizStartedToApi();
        postresult.subscribe( data => {if (!data) {
          this.updateStatisticsApi(ExamStatsActions.STARTED);
      } });
    } else if (statType === ExamStatsActions.FINISHED) {
      postresult = this.examStatsService.postQuizFinishedToApi();
      postresult.subscribe( data => {if (!data) {
        this.updateStatisticsApi(ExamStatsActions.FINISHED);
      }});
    }
  }


    getNewQuizId(): number {
        const highestQuizId = this.getHighestQuizId();
        return highestQuizId + 1;
    }

    private getHighestQuizId(): number {
        let highestQuizId = 0;
        QUIZZES.forEach(function(element) {
            if (element.id > highestQuizId ) {
                highestQuizId = element.id;
            }
        });
        return highestQuizId;
    }

    getAllQuizzes() {
        return QUIZZES;
    }

    updateQuizWithAnswer(quizId: number, signId: string, correct: boolean, dateTime: Date) {
        const toBeUpdatesQuizElement = QUIZZES.find(quiz => quiz.id === quizId );
        if (correct) {
            toBeUpdatesQuizElement.correct.signs.push(signId);
        } else {
            toBeUpdatesQuizElement.incorrect.signs.push(signId);
        }
    }

}
