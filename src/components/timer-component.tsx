import { useTaskContext } from '../contexts/TaskContext/task-context';

const Timer = () => {
  const { taskState } = useTaskContext();

  return (
    <p className="text-8xl font-bold text-sky-500 text-shadow-md dark:text-slate-100">
      {taskState.formattedSecondsRemaining}
    </p>
  );
};

export default Timer;
