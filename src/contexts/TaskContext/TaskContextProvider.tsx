import { useEffect, useReducer, type ReactNode } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";

type TaskContextProviderProps = {
  children: ReactNode;
};

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [taskState, dispatch] = useReducer(taskReducer, initialTaskState);

  useEffect(() => {
    console.log(taskState);
  }, [taskState]);

  return (
    <TaskContext.Provider value={{ taskState, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
