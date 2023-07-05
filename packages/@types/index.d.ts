import { Goal } from "./../panels/components/Goal";
export type GoalType = { url: string; name: string; id: number };
export type User = { name: string; id: number; goal: GoalType };
