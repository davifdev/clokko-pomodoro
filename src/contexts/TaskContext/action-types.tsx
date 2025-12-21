import type { TaskModel } from '../../models/taskModel';

export enum ActionsTypes {
  CREATE_TASK = 'createTask',
  INTERRUPT_TASK = 'interruptTask',
  COMPLETE_TASK = 'completeTask',
  COUNT_DOWN = 'countDown',
}

type TaskActionWithPayload =
  | {
      type: ActionsTypes.CREATE_TASK;
      payload: TaskModel;
    }
  | {
      type: ActionsTypes.COUNT_DOWN;
      payload: { secondsRemaining: number };
    };

type TaskActionWithoutPayload =
  | {
      type: ActionsTypes.INTERRUPT_TASK;
    }
  | {
      type: ActionsTypes.COMPLETE_TASK;
    };

export type TaskActions = TaskActionWithPayload | TaskActionWithoutPayload;
