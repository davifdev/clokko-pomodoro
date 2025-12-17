import type { TaskModel } from './taskModel';
export interface TaskStateModel {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: {
    working: number;
    shortResting: number;
    longResting: number;
  };
}
