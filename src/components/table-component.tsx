// Utils
import { useTaskContext } from '../contexts/TaskContext/task-context';
import { formatDate } from '../utils/formatDate';
import { getTaskStatus } from '../utils/getTaskStatus';
import type { SortTaskOptions } from '../utils/sortTasks';
interface TableComponentProps {
  handleSortTasks: ({ field }: Pick<SortTaskOptions, 'field'>) => void;
  sortTasksOptions: SortTaskOptions;
}

const TableComponent = ({
  handleSortTasks,
  sortTasksOptions,
}: TableComponentProps) => {
  const { taskState } = useTaskContext();

  return (
    <div className="h-[60vh] overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-sky-100 dark:bg-slate-800">
          <tr className="border-b border-white dark:border-slate-600">
            <th
              className="cursor-pointer p-2 hover:bg-sky-200 dark:hover:bg-slate-700"
              onClick={() => handleSortTasks({ field: 'name' })}
            >
              Tarefa
            </th>
            <th
              className="cursor-pointer p-2 hover:bg-sky-200 dark:hover:bg-slate-700"
              onClick={() => handleSortTasks({ field: 'durationInMinutes' })}
            >
              Duração
            </th>
            <th
              className="cursor-pointer p-2 hover:bg-sky-200 dark:hover:bg-slate-700"
              onClick={() => handleSortTasks({ field: 'startDate' })}
            >
              Data
            </th>
            <th className="p-2">Status</th>
            <th className="p-2">Tipo</th>
          </tr>
        </thead>
        <tbody className="bg-sky-50 dark:bg-slate-700">
          {sortTasksOptions.tasks.map((task) => {
            const traslateTypeTask = {
              working: 'Trabalho',
              shortResting: 'Descanso Curto',
              longResting: 'Descanso Longo',
            };

            return (
              <tr
                className="border-b border-white text-xs md:text-sm dark:border-slate-600"
                key={task.id}
              >
                <td className="p-2">{task.name}</td>
                <td className="p-2">{task.durationInMinutes}</td>
                <td className="p-2">{formatDate(task.startDate)}</td>
                <td className="p-2">
                  {getTaskStatus(task, taskState.activeTask)}
                </td>
                <td className="p-2">{traslateTypeTask[task.type]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
