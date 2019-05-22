
export interface IQuizResult {
    id?: number;
    startDate: Date;
    finishDate: Date;
    correct: {
        amount: number;
        signs: [string];
    };
    incorrect: {
        amount: number;
        signs: [string];
    };
    finished: boolean;
}
