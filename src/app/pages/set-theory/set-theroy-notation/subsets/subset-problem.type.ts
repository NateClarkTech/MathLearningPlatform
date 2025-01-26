export type SubsetProblem = {
    set: Set<number>;
    subset: Set<number>;
    type: string;
    answer: boolean;
    userAnswer: boolean | null;
};