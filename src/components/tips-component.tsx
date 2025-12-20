import { useTaskContext } from '../contexts/TaskContext/task-context';

interface TipsProps {
  cycleType: 'working' | 'shortResting' | 'longResting';
}

const Tips = ({ cycleType }: TipsProps) => {
  const { taskState } = useTaskContext();

  const TipsMessageActive = {
    working: (
      <p>
        Foque por <strong>{taskState.config.working} minutos!</strong>
      </p>
    ),
    shortResting: (
      <p>
        Descanse por <strong>{taskState.config.shortResting} minutos!</strong>
      </p>
    ),
    longResting: (
      <p>
        Descanse por <strong>{taskState.config.longResting} minutos!</strong>
      </p>
    ),
  };
  const TipsMessageNext = {
    working: (
      <p>
        Próximo Ciclo é de <strong>{taskState.config.working} minutos!</strong>
      </p>
    ),
    shortResting: (
      <p>
        Próximo descanso de{' '}
        <strong>{taskState.config.shortResting} minutos!</strong>
      </p>
    ),
    longResting: (
      <p>
        Próximo descanso de{' '}
        <strong>{taskState.config.longResting} minutos!</strong>
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
