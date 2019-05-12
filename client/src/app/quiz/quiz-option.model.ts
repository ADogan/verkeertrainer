
export interface IQuizOption {
    id?: number;
    code: string;
    description: string;
    status: 'unset' | 'correct' | 'chosenIncorrect' | 'incorrect';
}

