import { Injectable, OnInit } from '@angular/core';
import { TrafficSignsService } from './traffic-signs.service';
import { ITrafficSign } from '../models/traffic-sign.model';
import { IQuiz } from '../models/quiz.model';


let QUIZZES: IQuiz[] = [];


@Injectable()
export class QuizService implements OnInit {

    constructor(private trafficSignsService: TrafficSignsService) {}
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
        return newQuizId;
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
        let toBeUpdatesQuizElement = QUIZZES.find(quiz => quiz.id === quizId );
        if (correct) {
            toBeUpdatesQuizElement.correct.signs.push(signId);
        } else {
            toBeUpdatesQuizElement.incorrect.signs.push(signId);
        }
    }

}
