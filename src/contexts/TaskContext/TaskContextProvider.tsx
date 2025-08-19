import { useEffect, useReducer, type ReactNode } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./TaskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionModel } from "./TaskActions";

type TaskContextProviderProps = {
  children: ReactNode;
};

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [taskState, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage((e) => {
    const countDownSeconds = e.data;

    if (countDownSeconds <= 0) {
      console.log("Entrou!");
      dispatch({ type: TaskActionModel.COMPLETE_TASK });
      worker.terminate();
    } else {
      console.log("Entrei");
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

  return (
    <TaskContext.Provider value={{ taskState, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
