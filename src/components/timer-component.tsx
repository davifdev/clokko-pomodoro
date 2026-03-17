// Utils
import { useTaskContext } from '../contexts/TaskContext/task-context';

const Timer = () => {
  const { taskState } = useTaskContext();

  return (
    <p className="text-7xl font-semibold text-blue-500 text-shadow-md md:text-8xl dark:text-slate-100">
      {taskState.formattedSecondsRemaining}
    </p>
  );
};

export default Timer;
