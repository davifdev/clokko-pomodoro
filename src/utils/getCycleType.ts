import type { TaskModel } from '../models/taskModel';

export const getCycleType = (currentCycle: number): TaskModel['type'] => {
  if (currentCycle % 8 === 0) return 'longResting';
  if (currentCycle % 2 === 0) return 'shortResting';
  return 'working';
};
