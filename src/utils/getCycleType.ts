import type { TaskModel } from "../models/task-model"

export const getCycleType = (currentCycle: number): TaskModel['type'] => {
  if (currentCycle % 8 === 0) return "longRestTime";
  if (currentCycle % 2 === 0) return "shortRestTime";
  return "workTime";
}