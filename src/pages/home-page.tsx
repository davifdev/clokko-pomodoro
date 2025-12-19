import { useRef, type MouseEvent } from 'react';
import Button from '../components/button-component';
import Container from '../components/container';
import Input from '../components/input-component';
import type { TaskModel } from '../models/taskModel';

import { getCurrentCycle } from '../utils/getCurrentCycle';
import { getCycleType } from '../utils/getCycleType';

import Cycles from '../components/cycles-component-';
import { toast } from 'react-toastify';
import { useTaskContext } from '../contexts/TaskContext/task-context';
import Timer from '../components/timer-component';
import { ActionsTypes } from '../contexts/TaskContext/action-types';

const Home = () => {
  const { taskState, dispatch } = useTaskContext();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const currentCycle = getCurrentCycle(taskState.currentCycle);
  const cycleType = getCycleType(currentCycle);
  console.log(currentCycle, cycleType);

  const handleCreateTask = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!inputRef.current) return;

    if (!inputRef.current.value.trim()) {
      toast.error('Por favor, insira uma tarefa válida.');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: inputRef.current?.value,
      startDate: Date.now(),
      interruptDate: null,
      completeDate: null,
      durationInMinutes: taskState.config[cycleType],
      type: cycleType,
    };

    dispatch({
      type: ActionsTypes.CREATE_TASK,
      payload: newTask,
    });
  };

  const handleInterruptTask = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: ActionsTypes.INTERRUPT_TASK });
  };

  return (
    <main>
      <Container>
        <div className="flex flex-col items-center justify-center gap-10 pt-40">
          <div className="flex items-center gap-12">
            <p className="text-lg font-semibold text-sky-500 dark:text-slate-100">
              Pomodoro
            </p>
            <p className="text-lg font-semibold text-sky-500 dark:text-slate-100">
              Descanso
            </p>
            <p className="text-lg font-semibold text-sky-500 dark:text-slate-100">
              Descanso Longo
            </p>
          </div>
          <div className="flex h-96 w-96 items-center justify-center rounded-full border-4 border-slate-200 bg-zinc-50 p-2 shadow-md dark:border-slate-800 dark:bg-slate-900">
            <Timer />
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex items-center gap-2">
              <Cycles />
            </div>
            <Input type="text" placeholder="Digite uma tarefa" ref={inputRef} />

            {taskState.activeTask && (
              <Button
                className="w-96"
                onClick={handleInterruptTask}
                color="secondary"
              >
                Cancelar
              </Button>
            )}
            {!taskState.activeTask && (
              <Button
                className="w-96"
                onClick={handleCreateTask}
                color="primary"
              >
                Começar
              </Button>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Home;
