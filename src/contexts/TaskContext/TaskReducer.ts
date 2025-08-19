import type { TaskStateModel } from "../../models/task-state-model";
import { getCurrentCycle } from "../../utils/getCurrentCycle";
import { secondsToMinutes } from "../../utils/secondsToMinutes";
import { TaskActionModel, type TaskActionType } from "./TaskActions";

export const taskReducer = (
  state: TaskStateModel,
  action: TaskActionType
): TaskStateModel => {
  switch (action.type) {
    case TaskActionModel.START_TASK: {
      const newTask = action.payload;
      const currentCycle = getCurrentCycle(state.currentCycle);
      const secondsRemaining = action.payload.durationInMinutes * 60;

      return {
        ...state,
        config: { ...state.config },
        activeTask: newTask,
        currentCycle,
        secondsRemaining,
        formattedSecondsRemaining: secondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }

    case TaskActionModel.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: state.tasks.map((task) => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    }

    default:
      return state;
  }
};
