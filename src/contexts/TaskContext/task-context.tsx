// Utils
import { createContext, useContext, type ActionDispatch } from 'react';
import type { TaskStateModel } from '../../models/taskStateModel';
import { initialTaskStateValue } from './initialState';
import type { TaskActions } from './action-types';

interface TaskContextProps {
  taskState: TaskStateModel;
  dispatch: ActionDispatch<[action: TaskActions]>;
}

export const TaskContext = createContext<TaskContextProps>({
  taskState: initialTaskStateValue,
  dispatch: () => {},
});

export const useTaskContext = () => {
  return useContext(TaskContext);
};
