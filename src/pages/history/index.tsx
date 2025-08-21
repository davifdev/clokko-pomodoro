import { Trash } from "lucide-react";
import Container from "../../components/container";
import Button from "../../components/button";
import Title from "../../components/title";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { useEffect, useState } from "react";
import { sortTasks, type SortTaskOptions } from "../../utils/sortTask";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionModel } from "../../contexts/TaskContext/TaskActions";

const History = () => {
  useEffect(() => {
    document.title = "Histórico - Clokko Pomodoro";
  }, []);

  const { taskState, dispatch } = useTaskContext();
  const [confirmClearHistory, setConfirmClearHistory] = useState(false);
  const hasTask = taskState.tasks.length > 0;

  const [sortTasksOptions, setSortTasksOpttions] = useState<SortTaskOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: taskState.tasks }),
        field: "startDate",
        direction: "desc",
      };
    }
  );

  useEffect(() => {
    setSortTasksOpttions((prevTask) => ({
      ...prevTask,
      tasks: sortTasks({
        tasks: taskState.tasks,
        direction: prevTask.direction,
        field: prevTask.field,
      }),
    }));
  }, [taskState.tasks]);

  useEffect(() => {
    if (!confirmClearHistory) return;

    setConfirmClearHistory(false);
    dispatch({ type: TaskActionModel.RESET_TASK });
  }, [confirmClearHistory, dispatch]);

  const handleSortTasks = ({ field }: Pick<SortTaskOptions, "field">) => {
    const newDirection = sortTasksOptions.direction === "desc" ? "asc" : "desc";

    setSortTasksOpttions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTasksOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  };

  const handleResetHistory = () => {
    showMessage.dismiss();
    showMessage.confirm(
      "Tem certeza que deseja limpar o seu histórico ?",
      (confirmation) => {
        setConfirmClearHistory(confirmation);
      }
    );
  };

  return (
    <>
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 pt-40 w-full">
          <div className="w-full flex items-center justify-between">
            <Title>Histórico</Title>
            {taskState.tasks.length > 0 && (
              <Button
                className="flex items-center gap-1 cursor-pointer"
                type="button"
                color="red"
                onClick={handleResetHistory}
              >
                <span>Limpar histórico</span>
                <Trash />
              </Button>
            )}
          </div>

          <div className="w-full">
            {hasTask && (
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
                      onClick={() =>
                        handleSortTasks({ field: "durationInMinutes" })
                      }
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

                <tbody className="bg-blue-50 dark:bg-gray-800">
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
                        <td className="p-4 text-left">
                          {task.durationInMinutes}
                        </td>
                        <td className="p-4 text-left">
                          {formatDate(task.startDate)}
                        </td>
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
            )}
            {!hasTask && (
              <p className="text-center font-bold">
                Não existem tarefas criadas!
              </p>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default History;
