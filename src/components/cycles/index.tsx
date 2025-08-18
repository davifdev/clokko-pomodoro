import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getCurrentCycle } from "../../utils/getCurrentCycle";
import { getCycleType } from "../../utils/getCycleType";

const Cycles = () => {
  const { taskState } = useTaskContext();

  const arrCycles = Array.from({ length: taskState.currentCycle });

  const cyclesColor = {
    workTime: "bg-blue-600",
    shortRestTime: "bg-green-600",
    longRestTime: "bg-orange-600",
  } as const;

  const cyclesTranslate = {
    workTime: "Foco",
    shortRestTime: "Descanso curto",
    longRestTime: "Descanso longo",
  } as const;

  return (
    <div className="flex items-center gap-2">
      {arrCycles.map((_, index) => {
        const currentCycle = getCurrentCycle(index);
        const cycleType = getCycleType(currentCycle);
        return (
          <div
            key={`${cycleType}_${currentCycle}`}
            className={`w-4 h-4 ${cyclesColor[cycleType]}
            `}
            aria-label={`Ciclo de ${cyclesTranslate[cycleType]}`}
            title={`Ciclo de ${cyclesTranslate[cycleType]}`}
          ></div>
        );
      })}
    </div>
  );
};

export default Cycles;
