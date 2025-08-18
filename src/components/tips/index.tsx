import type { TaskModel } from "../../models/task-model";
import type { TaskStateModel } from "../../models/task-state-model";

type TipsProps = {
  taskState: TaskStateModel;
  cycleType: TaskModel["type"];
};

const Tips = ({ taskState, cycleType }: TipsProps) => {
  const tipsForNextTask = {
    workTime: (
      <span>
        O proximo ciclo é de <strong>{taskState.config.workTime}min</strong>{" "}
      </span>
    ),
    shortRestTime: (
      <span>
        O proximo descanso é de{" "}
        <strong>{taskState.config.shortRestTime}min </strong>{" "}
      </span>
    ),
    longRestTime: (
      <span>
        O proximo descanso é de{" "}
        <strong>{taskState.config.longRestTime}min</strong>
      </span>
    ),
  } as const;

  const tipsForCurrentTask = {
    workTime: (
      <span>
        Foque por <strong>{taskState.config.workTime}min</strong>
      </span>
    ),
    shortRestTime: (
      <span>
        Descanse por <strong>{taskState.config.shortRestTime}min</strong>
      </span>
    ),
    longRestTime: (
      <span>
        Descanse por <strong>{taskState.config.longRestTime}min</strong>
      </span>
    ),
  };

  return (
    <>
      {!taskState.activeTask && tipsForNextTask[cycleType]}
      {taskState.activeTask && tipsForCurrentTask[taskState.activeTask.type]}
    </>
  );
};

export default Tips;
