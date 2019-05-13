
export interface IQuizOption {
    id?: number;
    code: string;
    description: string;
    status: 'unset' | 'correct_chosen' | 'correct_not_chosen' | 'incorrect_chosen' | 'incorrect_not_chosen';
}

