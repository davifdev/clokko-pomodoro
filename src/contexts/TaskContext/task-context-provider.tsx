// Utils
import { useEffect, useReducer, type ReactNode } from 'react';
import { initialTaskStateValue } from './initialState';
import { TaskContext } from './task-context';
import { taskReducer } from './taskReducer';
import { ActionsTypes } from './action-types';
import { TimerWorkerManager } from '../../workers/timerWorkerManager';
import type { TaskStateModel } from '../../models/taskStateModel';
interface TaskContextProviderProps {
  children: ReactNode;
}

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [taskState, dispatch] = useReducer(
    taskReducer,
    initialTaskStateValue,
    () => {
      const tasks = JSON.parse(
        localStorage.getItem('tasks')!
      ) as TaskStateModel;
      return tasks || initialTaskStateValue;
    }
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskState));
  }, [taskState]);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage((e) => {
    const countDownSeconds = e.data;
    if (countDownSeconds <= 0) {
      console.log('Completou');
      dispatch({ type: ActionsTypes.COMPLETE_TASK });
      worker.terminate();
    } else {
      dispatch({
        type: ActionsTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    if (!taskState.activeTask) {
      worker.terminate();
      return;
    }

    worker.postMessage(taskState);
  }, [taskState, worker]);

  console.log(taskState);
  return (
    <TaskContext.Provider value={{ taskState, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
