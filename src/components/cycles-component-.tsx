// Utils
import { useTaskContext } from '../contexts/TaskContext/task-context';
import { getCurrentCycle } from '../utils/getCurrentCycle';
import { getCycleType } from '../utils/getCycleType';

const Cycles = () => {
  const { taskState } = useTaskContext();
  const arrCycles = Array.from({ length: taskState.currentCycle });

  const CyclesColors = {
    working: 'bg-green-500',
    shortResting: 'bg-red-500',
    longResting: 'bg-yellow-500',
  };

  const CyclesTranslate = {
    working: 'Trabalho',
    shortResting: 'Descanso Curto',
    longResting: 'Descanso Longo',
  };

  return (
    <>
      {arrCycles.map((_, index) => {
        const currentCycle = getCurrentCycle(index);
        const cycleType = getCycleType(currentCycle);

        return (
          <div
            key={index}
            className={`h-4 w-4 rounded-full ${CyclesColors[cycleType]}`}
            title={`Ciclo de ${CyclesTranslate[cycleType]}`}
          ></div>
        );
      })}
    </>
  );
};

export default Cycles;
