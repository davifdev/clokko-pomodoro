import { createContext } from "react";
import type { TaskStateModel } from "../../models/task-state-model";
import { initialTaskState } from "./initialTaskState";
import type { TaskActionType } from "./TaskActions";

type TaskStateType = {
  taskState: TaskStateModel;
  dispatch: React.Dispatch<TaskActionType>;
};

const initialContext = {
  taskState: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskStateType>(initialContext);
