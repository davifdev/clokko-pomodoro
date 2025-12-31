// Libs
import { Trash2Icon } from 'lucide-react';

// Components
import Container from '../components/container';
import Button from '../components/button-component';
import { useTaskContext } from '../contexts/TaskContext/task-context';

import TableComponent from '../components/table-component';
import { useEffect, useState } from 'react';
import { sortTasks, type SortTaskOptions } from '../utils/sortTasks';
import { ActionsTypes } from '../contexts/TaskContext/action-types';
import { showMessage } from '../adapters/showMessage';

const History = () => {
  const { taskState, dispatch } = useTaskContext();
  const [sortTasksOptions, setSortTasksOptions] = useState<SortTaskOptions>(
    () => {
      return {
        tasks: taskState.tasks,
        field: 'startDate',
        direction: 'desc',
      };
    }
  );
  const [confirmClearHistory, setConfirmClearHistory] = useState(false);

  useEffect(() => {
    setSortTasksOptions((prevTask) => ({
      ...prevTask,
      tasks: sortTasks({
        tasks: taskState.tasks,
        direction: prevTask.direction,
        field: prevTask.field,
      }),
    }));
  }, [taskState.tasks]);

  const handleSortTasks = ({ field }: Pick<SortTaskOptions, 'field'>) => {
    const newDirection = sortTasksOptions.direction === 'desc' ? 'asc' : 'desc';

    setSortTasksOptions({
      tasks: sortTasks({
        tasks: sortTasksOptions.tasks,
        direction: newDirection,
        field,
      }),
      direction: newDirection,
      field,
    });
  };

  useEffect(() => {
    if (!confirmClearHistory) return;

    setConfirmClearHistory(false);
    dispatch({ type: ActionsTypes.RESET_TASK });
  }, [confirmClearHistory, dispatch]);

  const onResetHistory = () => {
    showMessage.dismiss();
    showMessage.confirm(
      'Tem certeza que deseja limpar o seu histórico ?',
      (confirmation) => {
        setConfirmClearHistory(confirmation);
      }
    );
  };

  return (
    <main className="p-40">
      <Container>
        {taskState.tasks.length ? (
          <>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-blue-300 dark:text-slate-100">
                Histórico
              </h2>
              <Button
                className="text-sm"
                color="primary"
                onClick={onResetHistory}
              >
                Limpar Histórico
                <Trash2Icon size={18} />
              </Button>
            </div>
            <div className="mt-6 overflow-hidden rounded-md">
              <TableComponent
                handleSortTasks={handleSortTasks}
                sortTasksOptions={sortTasksOptions}
              />
            </div>
          </>
        ) : (
          <>
            <p className="text-center">Nenhuma tarefa foi encontrada!</p>
          </>
        )}
      </Container>
    </main>
  );
};

export default History;
