import type { TaskStateModel } from "../../models/task-state-model";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import type { SortTaskOptions } from "../../utils/sortTask";

type TableComponentProps = {
  handleSortTasks: ({ field }: Pick<SortTaskOptions, "field">) => void;
  sortTasksOptions: SortTaskOptions;
  taskState: TaskStateModel;
};

const TableComponent = ({
  handleSortTasks,
  sortTasksOptions,
  taskState,
}: TableComponentProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-2 border-blue-200 rounded-lg overflow-hidden">
        <thead className="bg-blue-100 border-b-2 border-b-blue-200 dark:bg-gray-900 dark:border-b-gray-700">
          <tr>
            <th
              className="p-4 text-left hover:bg-blue-200 transition-all duration-[300ms] cursor-pointer dark:hover:bg-gray-950"
              onClick={() => handleSortTasks({ field: "name" })}
            >
              Tarefa
            </th>
            <th
              className="p-4 text-left hover:bg-blue-200 transition-all duration-[300ms] cursor-pointer dark:hover:bg-gray-950"
              onClick={() => handleSortTasks({ field: "durationInMinutes" })}
            >
              Duração
            </th>
            <th
              className="p-4 text-left hover:bg-blue-200 transition-all duration-[300ms] cursor-pointer dark:hover:bg-gray-950"
              onClick={() => handleSortTasks({ field: "startDate" })}
            >
              Data
            </th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Tipo</th>
          </tr>
        </thead>

        <tbody className="bg-blue-50 dark:bg-gray-800 w-full">
          {sortTasksOptions.tasks.map((task) => {
            const taskTypeDictionary = {
              workTime: "Foco",
              shortRestTime: "Descanso curto",
              longRestTime: "Descanso longo",
            };

            return (
              <tr
                className="border-b-2 border-b-blue-200 h-12 dark:border-gray-700"
                key={task.id}
              >
                <td className="p-4 text-left">{task.name}</td>
                <td className="p-4 text-left">{task.durationInMinutes}</td>
                <td className="p-4 text-left">{formatDate(task.startDate)}</td>
                <td className="p-4 text-left">
                  {getTaskStatus(task, taskState.activeTask)}
                </td>
                <td className="p-4 text-left">
                  {taskTypeDictionary[task.type]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
