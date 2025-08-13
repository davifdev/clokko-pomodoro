import type { TaskStateModel } from "./task-state-model";

export type TaskModel = {
  id: string;
  name: string;
  durationInMinutes: number;
  startDate: string;
  completedDate: string | null;
  interruptDate: string | null; 
  type: keyof TaskStateModel['config'];
}