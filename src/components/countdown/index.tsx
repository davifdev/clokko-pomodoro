import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

const Countdown = () => {
  const { taskState } = useTaskContext();
  return (
    <span className="text-8xl text-blue-600 font-medium">
      {taskState.formattedSecondsRemaining}
    </span>
  );
};

export default Countdown;
