import type { TaskModel } from '../../models/taskModel';

export enum ActionsTypes {
  CREATE_TASK = 'createTask',
  INTERRUPT_TASK = 'interruptTask',
}

type TaskActionWithPayload = {
  type: ActionsTypes.CREATE_TASK;
  payload: TaskModel;
};

type TaskActionWithoutPayload = {
  type: ActionsTypes.INTERRUPT_TASK;
};

export type TaskActions = TaskActionWithPayload | TaskActionWithoutPayload;
