
export interface ITrafficSign {
    id?: number;
    code: string;
    image: {
        filename: string;
        fileextension?: string;
        url?: string;
    };
    description: string;
    clarification?: string;
    category: string;
}