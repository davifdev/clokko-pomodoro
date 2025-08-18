import type { TaskStateModel } from "./task-state-model";

export type TaskModel = {
  id: string;
  name: string;
  durationInMinutes: number;
  startDate: number;
  completedDate: number | null;
  interruptDate: number | null; 
  type: keyof TaskStateModel['config'];
}