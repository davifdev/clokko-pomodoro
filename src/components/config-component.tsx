import { createPortal } from 'react-dom';
import Button from './button-component';
import Input from './input-component';
import { useRef, type FormEvent } from 'react';
import { useTaskContext } from '../contexts/TaskContext/task-context';
import { ActionsTypes } from '../contexts/TaskContext/action-types';
import { toast } from 'react-toastify';
interface ConfigProps {
  openConfig: boolean;
  toggleConfig: () => void;
}

const Config = ({ openConfig, toggleConfig }: ConfigProps) => {
  const { taskState, dispatch } = useTaskContext();
  const workingRef = useRef<HTMLInputElement | null>(null);
  const shortRestingRef = useRef<HTMLInputElement | null>(null);
  const longRestingRef = useRef<HTMLInputElement | null>(null);
  if (!openConfig) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const working = Number(workingRef.current?.value);
    const shortResting = Number(shortRestingRef.current?.value);
    const longResting = Number(longRestingRef.current?.value);

    dispatch({
      type: ActionsTypes.UPDATE_TASK,
      payload: { working, shortResting, longResting },
    });

    toggleConfig();
    toast.success('Configurações salvas');
  };

  return (
    <>
      {createPortal(
        <main
          className="fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center backdrop-blur-sm"
          onClick={toggleConfig}
        >
          <div
            className="relative z-50 w-80 rounded-md bg-white p-6 shadow-lg dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-center text-lg font-semibold text-sky-500 dark:text-slate-100">
              Configurações
            </h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <Input
                label="Foco"
                id="focus"
                type="number"
                ref={workingRef}
                defaultValue={taskState.config.working}
              />
              <Input
                label="Descanso curto"
                id="shortingResting"
                type="number"
                ref={shortRestingRef}
                defaultValue={taskState.config.shortResting}
              />
              <Input
                label="Descanso longo"
                id="longResting"
                type="number"
                ref={longRestingRef}
                defaultValue={taskState.config.longResting}
              />
              <Button type="submit" color="primary">
                Salvar
              </Button>
            </form>
          </div>
        </main>,
        document.body
      )}
    </>
  );
};

export default Config;
