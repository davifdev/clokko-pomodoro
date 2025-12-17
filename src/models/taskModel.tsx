import type { TaskStateModel } from './taskStateModel';

export interface TaskModel {
  id: string;
  name: string;
  durationInMinutes: number;
  startDate: Date;
  completeDate: boolean | null;
  interruptDate: boolean | null;
  type: keyof TaskStateModel['config'];
}
