
export interface IQuiz {
    id: number;
    startDate: Date;
    finishDate?: Date;
    correct?: {
        signs?: string[];
    };
    incorrect?: {
        signs?: string[];
    };
    finished?: boolean;
}
