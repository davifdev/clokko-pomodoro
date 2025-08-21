import { useEffect, useRef } from "react";

import { getCurrentCycle } from "../../utils/getCurrentCycle";
import { getCycleType } from "../../utils/getCycleType";
import type { TaskModel } from "../../models/task-model";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { TaskActionModel } from "../../contexts/TaskContext/TaskActions";
import { showMessage } from "../../adapters/showMessage";
import Container from "../../components/container";
import Countdown from "../../components/countdown";
import Tips from "../../components/tips";
import Cycles from "../../components/cycles";
import Input from "../../components/input";
import Button from "../../components/button";

const Home = () => {
  useEffect(() => {
    document.title = "Clokko Pomodoro";
  }, []);
  const { taskState, dispatch } = useTaskContext();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const currentCycle = getCurrentCycle(taskState.currentCycle);
  const cycleType = getCycleType(currentCycle);
  const lastTaskName = taskState.tasks[taskState.tasks.length - 1]?.name || "";

  const handleSubmitTask = (event: React.FormEvent<HTMLFormElement>) => {
    showMessage.dismiss();
    event.preventDefault();

    if (!inputRef.current) return null;

    if (!inputRef.current.value.trim()) {
      showMessage.error("Digite uma tarefa!");
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

    dispatch({ type: TaskActionModel.START_TASK, payload: newTask });
    showMessage.sucess("Tarefa Iniciada");
  };

  const handleInterruptTask = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    showMessage.dismiss();
    event.preventDefault();

    dispatch({ type: TaskActionModel.INTERRUPT_TASK });
    showMessage.error("Tarefa Interrompida");
  };

  return (
    <Container>
      <div className="pt-10 flex flex-col items-center justify-center gap-12">
        <div className="flex items-center gap-8">
          <div
            className={`flex items-center gap-2 text-lg  p-2 ${
              taskState.activeTask?.type === "workTime"
                ? "border-b-2  border-b-blue-500"
                : "border-b-0"
            }`}
          >
            <strong>Pomodoro</strong>
          </div>
          <div
            className={`flex items-center gap-2 text-lg  p-2 ${
              taskState.activeTask?.type === "shortRestTime"
                ? " border-b-2 border-b-blue-500"
                : "border-b-0"
            }`}
          >
            <strong>Descanso</strong>
          </div>
          <div
            className={`flex items-center gap-2 text-lg p-2 ${
              taskState.activeTask?.type === "longRestTime"
                ? "border-b-2  border-b-blue-500"
                : "border-b-0"
            }`}
          >
            <strong>Descanso Longo</strong>
          </div>
        </div>
        <div>
          <form className="flex flex-col gap-6" onSubmit={handleSubmitTask}>
            <div className="w-[364px] h-[364px] rounded-full bg-blue-50 dark:bg-gray-900 flex items-center justify-center flex-col  gap-6 border-4 border-blue-200 dark:border-gray-800">
              <Countdown />
              <div className="flex flex-col text-center text-lg">
                <Tips cycleType={cycleType} taskState={taskState} />
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <Cycles />
              <Input
                type="text"
                placeholder="Digite uma tarefa"
                className="text-center border-2 border-blue-200 p-2 rounded-lg bg-blue-50 dark:bg-gray-900 dark:border-gray-800"
                ref={inputRef}
                disabled={!!taskState.activeTask}
                defaultValue={lastTaskName}
              />
            </div>

            {!taskState.activeTask && (
              <Button
                type="submit"
                aria-label="Iniciar pomodoro"
                title="Iniciar pomodoro"
                color="blue"
              >
                Iniciar
              </Button>
            )}

            {taskState.activeTask && (
              <Button
                type="button"
                aria-label="Parar pomodoro"
                title="Parar pomodoro"
                onClick={handleInterruptTask}
                color="red"
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

export default Home;
