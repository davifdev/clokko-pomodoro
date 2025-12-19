import { useReducer, type ReactNode } from 'react';
import { initialTaskStateValue } from './initialState';

import { TaskContext } from './task-context';
import { taskReducer } from './taskReducer';

interface TaskContextProviderProps {
  children: ReactNode;
}

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [taskState, dispatch] = useReducer(taskReducer, initialTaskStateValue);

  return (
    <TaskContext.Provider value={{ taskState, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
