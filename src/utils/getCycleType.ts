import type { TaskModel } from "../models/task-model"

export const getCycleType = (currentCycle: number): TaskModel['type'] => {
  if (currentCycle % 2 === 0) return "shortRestTime";
  if (currentCycle % 8 === 0) return "longRestTime";
  return "workTime";

}