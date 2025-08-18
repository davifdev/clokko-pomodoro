import { createContext } from "react";
import type { TaskStateModel } from "../../models/task-state-model";
import { initialTaskState } from "./initialTaskState";

type TaskStateType = {
  taskState: TaskStateModel;
  setTaskState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContext = {
  taskState: initialTaskState,
  setTaskState: () => {},
};

export const TaskContext = createContext<TaskStateType>(initialContext);
