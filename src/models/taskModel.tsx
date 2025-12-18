import type { TaskStateModel } from './taskStateModel';

export interface TaskModel {
  id: string;
  name: string;
  durationInMinutes: number;
  startDate: number;
  completeDate: number | null;
  interruptDate: number | null;
  type: keyof TaskStateModel['config'];
}
