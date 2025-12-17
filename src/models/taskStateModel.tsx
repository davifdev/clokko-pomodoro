import type { TaskModel } from './taskModel';

export interface TaskStateModel {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: {
    working: '25';
    shortResting: '5';
    longResting: '15';
  };
}
