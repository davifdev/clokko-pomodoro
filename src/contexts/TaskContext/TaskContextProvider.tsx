import { useEffect, useReducer, useRef, type ReactNode } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./TaskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionModel } from "./TaskActions";
import type { TaskStateModel } from "../../models/task-state-model";
import { loadBeep } from "../../utils/loadBeep";

type TaskContextProviderProps = {
  children: ReactNode;
};

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [taskState, dispatch] = useReducer(
    taskReducer,
    initialTaskState,
    () => {
      const storageState = localStorage.getItem("taskState");

      if (!storageState) return initialTaskState;

      const parsedStorageState = JSON.parse(storageState) as TaskStateModel;

      return {
        ...parsedStorageState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
      };
    }
  );
  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);
  const worker = TimerWorkerManager.getInstance();

  worker.onmessage((e) => {
    const countDownSeconds = e.data;

    if (countDownSeconds <= 0) {
      if (playBeepRef.current) {
        playBeepRef.current();
        playBeepRef.current = null;
      }
      dispatch({ type: TaskActionModel.COMPLETE_TASK });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionModel.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    localStorage.setItem("taskState", JSON.stringify(taskState));

    if (!taskState.activeTask) {
      worker.terminate();
      return;
    }

    document.title = `${taskState.formattedSecondsRemaining} - Clokko Pomodoro`;

    worker.postMessage(taskState);
  }, [taskState, worker]);

  useEffect(() => {
    if (taskState.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [taskState.activeTask]);
  
  return (
    <TaskContext.Provider value={{ taskState, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
