import { Trash } from "lucide-react";
import Container from "../../components/container";
import Button from "../../components/button";
import Title from "../../components/title";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { useEffect, useState } from "react";
import { sortTasks, type SortTaskOptions } from "../../utils/sortTask";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionModel } from "../../contexts/TaskContext/TaskActions";
import TableComponent from "../../components/table-component";

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
        <div className="flex flex-col items-center gap-4 w-full h-[75vh] pt-10">
          <div className="w-full flex items-center justify-between ">
            <Title>Histórico</Title>
            {taskState.tasks.length > 0 && (
              <Button
                className="flex items-center gap-1 cursor-pointer"
                type="button"
                color="red"
                onClick={handleResetHistory}
              >
                <span className="text-sm">Limpar histórico</span>
                <Trash width={16} height={16} />
              </Button>
            )}
          </div>

          <div className="w-full overflow-auto">
            {hasTask && (
              <TableComponent
                taskState={taskState}
                handleSortTasks={handleSortTasks}
                sortTasksOptions={sortTasksOptions}
              />
            )}
            {!hasTask && (
              <p className="text-center font-bold mt-20">
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
