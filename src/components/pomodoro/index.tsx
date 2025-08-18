import { useRef } from "react";
import Button from "../button";
import Container from "../container";
import Countdown from "../countdown";
import Cycles from "../cycles";
import Input from "../input";

import { getCurrentCycle } from "../../utils/getCurrentCycle";
import { getCycleType } from "../../utils/getCycleType";
import { secondsToMinutes } from "../../utils/secondsToMinutes";
import type { TaskModel } from "../../models/task-model";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

const Pomodoro = () => {
  const { taskState, setTaskState } = useTaskContext();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const currentCycle = getCurrentCycle(taskState.currentCycle);
  const cycleType = getCycleType(currentCycle);

  const handleSubmitTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputRef.current) return null;

    if (!inputRef.current.value.trim()) {
      alert("Digite uma tarefa!");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: inputRef.current.value,
      startDate: Date.now(),
      completedDate: null,
      interruptDate: null,
      durationInMinutes: taskState.config[cycleType],
      type: cycleType,
    };

    const secondsRemaining = newTask.durationInMinutes * 60;

    setTaskState((prevState) => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle,
        secondsRemaining,
        formattedSecondsRemaining: secondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  const handleInterruptTask = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    setTaskState((prevState) => {
      return {
        ...prevState,
        currentCycle,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: prevState.tasks.map((task) => {
          if (prevState.activeTask && prevState.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    });
  };

  return (
    <Container>
      <div className="pt-10 flex flex-col items-center justify-center gap-12">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-lg border-b-2 border-b-blue-500 p-2">
            <span>Pomodoro</span>
            <strong>0</strong>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <span>Descanso</span>
            <strong>0</strong>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <span>Descanso longo</span>
            <strong>0</strong>
          </div>
        </div>
        <div>
          <form
            className="flex flex-col items-center gap-6"
            onSubmit={handleSubmitTask}
          >
            <div className="w-[364px] h-[364px] rounded-full bg-blue-50 dark:bg-gray-900 flex items-center justify-center flex-col  gap-6 border-4 border-blue-200 dark:border-gray-800">
              <Countdown />
              <div className="flex flex-col text-center text-lg">
                <span>Foque por:</span>
                <strong>25min</strong>
              </div>
            </div>
            <Cycles />
            <Input
              type="text"
              placeholder="Digite uma tarefa"
              className="text-center border-2 border-blue-200 p-2 rounded-lg bg-blue-50 dark:bg-gray-900 dark:border-gray-800"
              ref={inputRef}
              disabled={!!taskState.activeTask}
            />

            {!taskState.activeTask && (
              <Button
                className="bg-blue-600 p-4 text-white rounded-full w-full text-lg font-semibold cursor-pointer"
                type="submit"
                aria-label="Iniciar pomodoro"
                title="Iniciar pomodoro"
              >
                Iniciar
              </Button>
            )}

            {taskState.activeTask && (
              <Button
                className="bg-red-600 p-4 text-white rounded-full w-full text-lg font-semibold cursor-pointer"
                type="button"
                aria-label="Parar pomodoro"
                title="Parar pomodoro"
                onClick={handleInterruptTask}
              >
                Parar
              </Button>
            )}
          </form>
        </div>
      </div>
    </Container>
  );
};
export default Pomodoro;
