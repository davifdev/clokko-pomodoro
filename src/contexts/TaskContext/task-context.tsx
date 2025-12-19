import { createContext, useContext, type ActionDispatch } from 'react';
import type { TaskStateModel } from '../../models/taskStateModel';
import { initialTaskStateValue } from './initialState';

interface TaskContextProps {
  taskState: TaskStateModel;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: ActionDispatch<[action: any]>;
}

export const TaskContext = createContext<TaskContextProps>({
  taskState: initialTaskStateValue,
  dispatch: () => {},
});

export const useTaskContext = () => {
  return useContext(TaskContext);
};
