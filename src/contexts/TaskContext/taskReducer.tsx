// Utils
import type { TaskStateModel } from '../../models/taskStateModel';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { getCurrentCycle } from '../../utils/getCurrentCycle';
import { ActionsTypes, type TaskActions } from './action-types';

export const taskReducer = (state: TaskStateModel, action: TaskActions) => {
  switch (action.type) {
    case ActionsTypes.CREATE_TASK: {
      const newTask = action.payload;
      const secondsRemaining = newTask.durationInMinutes * 60;
      const currentCycle = getCurrentCycle(state.currentCycle);

      return {
        ...state,
        secondsRemaining,
        activeTask: newTask,
        currentCycle: currentCycle,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
        config: { ...state.config },
      };
    }
    case ActionsTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map((task) => {
          if (task.id === state.activeTask?.id) {
            return {
              ...task,
              interruptDate: Date.now(),
            };
          }
          return task;
        }),
      };
    }
    default:
      return state;
  }
};
