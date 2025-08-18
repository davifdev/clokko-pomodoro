import { useEffect, useState, type ReactNode } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
  children: ReactNode;
};

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [taskState, setTaskState] = useState(initialTaskState);

  useEffect(() => {
    console.log(taskState);
  }, [taskState]);

  return (
    <TaskContext.Provider value={{ taskState, setTaskState }}>
      {children}
    </TaskContext.Provider>
  );
};
