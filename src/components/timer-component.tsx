// Utils
import { useTaskContext } from '../contexts/TaskContext/task-context';

const Timer = () => {
  const { taskState } = useTaskContext();
  console.log(taskState.formattedSecondsRemaining, taskState.secondsRemaining);

  return (
    <p className="text-7xl font-bold text-blue-300 text-shadow-md md:text-8xl dark:text-slate-100">
      {taskState.formattedSecondsRemaining}
    </p>
  );
};

export default Timer;
