import { createPortal } from 'react-dom';
import Button from './button-component';
import Input from './input-component';

import { useTaskContext } from '../contexts/TaskContext/task-context';
import { ActionsTypes } from '../contexts/TaskContext/action-types';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import type z from 'zod';
import { configSchema } from '../schemas/config.schema';
import { zodResolver } from '@hookform/resolvers/zod';
interface ConfigProps {
  openConfig: boolean;
  toggleConfig: () => void;
}

type configForm = z.infer<typeof configSchema>;

const Config = ({ openConfig, toggleConfig }: ConfigProps) => {
  const { taskState, dispatch } = useTaskContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<configForm>({
    resolver: zodResolver(configSchema),
    defaultValues: {
      focus: '25',
      shortResting: '5',
      longResting: '15',
    },
  });

  if (!openConfig) return null;

  const onSubmit = (data: configForm) => {
    console.log(data);
    const working = Number(data.focus);
    const shortResting = Number(data.shortResting);
    const longResting = Number(data.longResting);

    if (working > 99) {
      setError('focus', { message: 'Digite um valor entre 1 e 99 para foco' });
      return;
    }

    if (shortResting > 30) {
      setError('shortResting', {
        message: 'Digite um valor entre 1 e 30 para descanso curto',
      });
      return;
    }

    if (longResting > 60) {
      setError('longResting', {
        message: 'Digite um valor entre 1 e 60 para descanso longo',
      });
      return;
    }

    dispatch({
      type: ActionsTypes.UPDATE_TASK,
      payload: { working, shortResting, longResting },
    });

    toggleConfig();
    toast.success('Configurações salvas');
  };

  console.log(errors);
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
            <h2 className="mb-4 text-center text-lg font-semibold text-blue-300 dark:text-slate-100">
              Configurações
            </h2>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                label="Foco"
                id="focus"
                type="number"
                {...register('focus')}
                defaultValue={taskState.config.working}
                errorMessage={errors.focus?.message}
              />
              <Input
                label="Descanso curto"
                id="shortingResting"
                type="number"
                {...register('shortResting')}
                defaultValue={taskState.config.shortResting}
                errorMessage={errors.shortResting?.message}
              />
              <Input
                label="Descanso longo"
                id="longResting"
                type="number"
                {...register('longResting')}
                defaultValue={taskState.config.longResting}
                errorMessage={errors.longResting?.message}
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
