// Libs
import { Trash2Icon } from 'lucide-react';

// Components
import Container from '../components/container';
import Button from '../components/button-component';
import { useTaskContext } from '../contexts/TaskContext/task-context';

import TableComponent from '../components/table-component';
import { useEffect, useState } from 'react';
import { sortTasks, type SortTaskOptions } from '../utils/sortTasks';

const History = () => {
  const { taskState } = useTaskContext();
  const [sortTasksOptions, setSortTasksOptions] = useState<SortTaskOptions>(
    () => {
      return {
        tasks: taskState.tasks,
        field: 'startDate',
        direction: 'desc',
      };
    }
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
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

  return (
    <main className="p-40">
      <Container>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-sky-500 dark:text-slate-100">
            Histórico
          </h2>
          <Button className="text-sm" color="primary">
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
      </Container>
    </main>
  );
};

export default History;
