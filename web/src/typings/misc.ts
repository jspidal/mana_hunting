export interface Config {
    fallbackResourceName: string;
    allowEscapeKey: boolean;
}

export interface Task {
    id: number;
    title: string;
    cashReward: number;
    xpReward: number;
    canClaim: boolean;
}