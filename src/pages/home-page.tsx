// Components
import Button from '../components/button-component';
import Container from '../components/container';
import Input from '../components/input-component';
import Timer from '../components/timer-component';
import Cycles from '../components/cycles-component-';
import CycleName from '../components/cycle-name-component';
import Tips from '../components/tips-component';

// Utils
import type { TaskModel } from '../models/taskModel';
import { useRef, type MouseEvent } from 'react';
import { getCurrentCycle } from '../utils/getCurrentCycle';
import { getCycleType } from '../utils/getCycleType';
import { useTaskContext } from '../contexts/TaskContext/task-context';
import { ActionsTypes } from '../contexts/TaskContext/action-types';
import { showMessage } from '../adapters/showMessage';

const Home = () => {
  const { taskState, dispatch } = useTaskContext();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const currentCycle = getCurrentCycle(taskState.currentCycle);
  const cycleType = getCycleType(currentCycle);

  const handleCreateTask = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    showMessage.dismiss();

    if (!inputRef.current) return;

    if (!inputRef.current.value.trim()) {
      showMessage.error('Por favor, insira uma tarefa válida.');
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
    showMessage.dismiss();

    dispatch({ type: ActionsTypes.INTERRUPT_TASK });
    showMessage.error('Tarefa interrompida');
  };

  return (
    <main>
      <Container>
        <div className="flex flex-col items-center justify-center gap-10 pt-40">
          <div className="flex items-center gap-12">
            <CycleName>Pomodoro</CycleName>
            <CycleName>Descanso</CycleName>
            <CycleName>Descanso Longo</CycleName>
          </div>
          <div className="flex h-96 w-96 flex-col items-center justify-center gap-8 rounded-full border-4 border-slate-200 bg-zinc-50 p-2 shadow-md dark:border-slate-800 dark:bg-slate-900">
            <Timer />
            <Tips cycleType={cycleType} />
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex items-center gap-2">
              <Cycles />
            </div>
            <Input
              type="text"
              placeholder="Digite uma tarefa"
              ref={inputRef}
              defaultValue={taskState.activeTask?.name}
            />

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
