export type DemorgansLawProblem = {
    setA: Set<any>;
    setB: Set<any>;
    aComplement: boolean;
    bComplement: boolean;
    type: string;
    answer: Set<any>;
    userAnswer: string[] | null;
};