import { createPortal } from 'react-dom';
import Button from './button-component';
import Input from './input-component';
import type { FormEvent } from 'react';
interface ConfigProps {
  openConfig: boolean;
  handleClickOpenConfig: () => void;
}

const Config = ({ openConfig, handleClickOpenConfig }: ConfigProps) => {
  if (!openConfig) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleClickOpenConfig();
  };

  return (
    <>
      {createPortal(
        <main
          className="fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center backdrop-blur-sm"
          onClick={handleClickOpenConfig}
        >
          <div
            className="relative z-50 w-80 rounded-md bg-white p-6 shadow-lg dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-center text-lg font-semibold text-sky-500 dark:text-slate-100">
              Configurações
            </h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <Input label="Foco" id="focus" />
              <Input label="Descanso curto" id="shortingResting" />
              <Input label="Descanso longo" id="longResting" />
              <Button type="submit">Salvar</Button>
            </form>
          </div>
        </main>,
        document.body
      )}
    </>
  );
};

export default Config;
