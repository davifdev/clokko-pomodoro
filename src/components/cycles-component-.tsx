import type { TaskStateModel } from '../models/taskStateModel';
import { getCurrentCycle } from '../utils/getCurrentCycle';

import { getCycleType } from '../utils/getCycleType';

interface CurrentCycleProps {
  currentTask: TaskStateModel;
}

const Cycles = ({ currentTask }: CurrentCycleProps) => {
  const arrCycles = Array.from({ length: currentTask.currentCycle });

  const CyclesColors = {
    working: 'bg-green-300',
    shortResting: 'bg-red-300',
    longResting: 'bg-yellow-300',
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
