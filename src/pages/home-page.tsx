import { useRef, useState, type MouseEvent } from 'react';
import Button from '../components/button-component';
import Container from '../components/container';
import Input from '../components/input-component';
import type { TaskModel } from '../models/taskModel';
import type { TaskStateModel } from '../models/taskStateModel';
import { getCurrentCycle } from '../utils/getCurrentCycle';
import { getCycleType } from '../utils/getCycleType';
import { formatSecondsToMinutes } from '../utils/formatSecondsToMinutes';
import Cycles from '../components/cycles-component-';
import { toast } from 'react-toastify';

const Home = () => {
  const initialTaskStateValue: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
      working: 25,
      shortResting: 5,
      longResting: 15,
    },
  };

  const [currentTask, setCurrentTask] = useState<TaskStateModel>(
    initialTaskStateValue
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  const currentCycle = getCurrentCycle(currentTask.currentCycle);
  const cycleType = getCycleType(currentCycle);

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
      durationInMinutes: currentTask.config[cycleType],
      type: cycleType,
    };

    const secondsRemaining = newTask.durationInMinutes * 60;

    setCurrentTask((prevTasks) => {
      return {
        ...prevTasks,
        secondsRemaining,
        activeTask: newTask,
        currentCycle: currentCycle,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevTasks.tasks, newTask],
        config: { ...prevTasks.config },
      };
    });
  };

  const handleInterruptTask = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentTask((prevTasks) => {
      return {
        ...prevTasks,
        activeTask: null,
        formattedSecondsRemaining: '00:00',
        tasks: prevTasks.tasks.map((task) => {
          if (task.id === prevTasks.activeTask?.id) {
            return {
              ...task,
              interruptDate: Date.now(),
            };
          }
          return task;
        }),
      };
    });
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
            <p className="text-8xl font-bold text-sky-500 text-shadow-md dark:text-slate-100">
              {currentTask.formattedSecondsRemaining}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex items-center gap-2">
              <Cycles currentTask={currentTask} />
            </div>
            <Input type="text" placeholder="Digite uma tarefa" ref={inputRef} />
            {currentTask.activeTask && (
              <Button
                className="w-96"
                onClick={handleInterruptTask}
                color="secondary"
              >
                Cancelar
              </Button>
            )}
            {!currentTask.activeTask && (
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
