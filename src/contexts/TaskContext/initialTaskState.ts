import type { TaskStateModel } from "../../models/task-state-model";

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 1,
    shortRestTime: 1,
    longRestTime: 1,
  },
};