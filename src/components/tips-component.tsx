// Utils
import { useTaskContext } from '../contexts/TaskContext/task-context';

interface TipsProps {
  cycleType: 'working' | 'shortResting' | 'longResting';
}

const Tips = ({ cycleType }: TipsProps) => {
  const { taskState } = useTaskContext();

  const TipsMessageActive = {
    working: (
      <p className="text-blue-300 dark:text-slate-100">
        Foque por <strong>{taskState.config.working} min!</strong>
      </p>
    ),
    shortResting: (
      <p className="text-blue-300 dark:text-slate-100">
        Descanse por <strong>{taskState.config.shortResting} min!</strong>
      </p>
    ),
    longResting: (
      <p className="text-blue-300 dark:text-slate-100">
        Descanse por <strong>{taskState.config.longResting} min!</strong>
      </p>
    ),
  };
  const TipsMessageNext = {
    working: (
      <p className="text-blue-300 dark:text-slate-100">
        Próximo Ciclo é de <strong>{taskState.config.working} min!</strong>
      </p>
    ),
    shortResting: (
      <p className="text-blue-300 dark:text-slate-100">
        Próximo descanso de{' '}
        <strong>{taskState.config.shortResting} min!</strong>
      </p>
    ),
    longResting: (
      <p className="text-blue-300 dark:text-slate-100">
        Próximo descanso de <strong>{taskState.config.longResting} min!</strong>
      </p>
    ),
  };

  return (
    <>
      {taskState.activeTask && (
        <p>{TipsMessageActive[taskState.activeTask.type]}</p>
      )}
      {!taskState.activeTask && <p>{TipsMessageNext[cycleType]}</p>}
    </>
  );
};

export default Tips;
