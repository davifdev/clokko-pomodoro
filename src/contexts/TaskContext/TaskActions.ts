import type { TaskModel } from "../../models/task-model";
import type { TaskStateModel } from "../../models/task-state-model";

export enum TaskActionModel {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
  RESET_TASK = "RESET_TASK",
  COUNT_DOWN = "COUNT_DOWN",
  COMPLETE_TASK = "COMPLETE_TASK",
  CHANGE_SETTINGS = "CHANGE_SETTINGS",
}

type TaskActionTypeWithPayload =
  | {
      type: TaskActionModel.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionModel.COUNT_DOWN;
      payload: { secondsRemaining: number };
    }
  | {
      type: TaskActionModel.CHANGE_SETTINGS;
      payload: TaskStateModel["config"];
    };

type TaskActionTypeWithoutPayload =
  | {
      type: TaskActionModel.INTERRUPT_TASK;
    }
  | {
      type: TaskActionModel.RESET_TASK;
    }
  | {
      type: TaskActionModel.COMPLETE_TASK;
    };

export type TaskActionType =
  | TaskActionTypeWithPayload
  | TaskActionTypeWithoutPayload;
