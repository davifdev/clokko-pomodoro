import type { TaskModel } from "./task-model"

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null; 
  currentCycle: number;
  config: {
    workTime: number;
    shortRestTime: number;
    longRestTime: number;
  }
}