import { useEffect, useRef } from "react";
import Button from "../../components/button";
import Container from "../../components/container";
import Input from "../../components/input";
import Title from "../../components/title";
import { showMessage } from "../../adapters/showMessage";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { TaskActionModel } from "../../contexts/TaskContext/TaskActions";

const Settings = () => {
  useEffect(() => {
    document.title = "Configurações - Clokko Pomodoro";
  }, []);

  const { taskState, dispatch } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement | null>(null);
  const shortRestTimeInput = useRef<HTMLInputElement | null>(null);
  const longRestTimeInput = useRef<HTMLInputElement | null>(null);

  const handleSaveSettings = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showMessage.dismiss();

    const formErrors = [];

    const workTime = Number(workTimeInput.current?.value);
    const shortRestTime = Number(shortRestTimeInput.current?.value);
    const longRestTime = Number(longRestTimeInput.current?.value);

    if (isNaN(workTime) || isNaN(shortRestTime) || isNaN(longRestTime)) {
      formErrors.push("Use apenas npumeros para todos os campos");
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push("Digite um valor entre 1 e 99 para foco");
    }

    if (shortRestTime < 1 || shortRestTime > 30) {
      formErrors.push("Digite um valor entre 1 e 30 para descanso curto");
    }

    if (longRestTime < 1 || longRestTime > 60) {
      formErrors.push("Digite um valor entre 1 e 60 para descanso longo");
    }

    if (formErrors.length > 0) {
      formErrors.forEach((err) => showMessage.error(err));
      return;
    }

    dispatch({
      type: TaskActionModel.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortRestTime,
        longRestTime,
      },
    });

    showMessage.sucess("Configurações salvas");
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-4 h-[75vh]">
        <Title>Configurações</Title>
        <form
          className="flex flex-col gap-6 mb-5"
          onSubmit={handleSaveSettings}
        >
          <Input
            defaultValue={taskState.config.workTime}
            type="number"
            labelText="Tempo de foco"
            id="focus"
            ref={workTimeInput}
          />
          <Input
            defaultValue={taskState.config.shortRestTime}
            type="number"
            labelText="Descanso curto"
            id="shortRestTime"
            ref={shortRestTimeInput}
          />
          <Input
            defaultValue={taskState.config.longRestTime}
            type="number"
            labelText="Descanso longo"
            id="longRestTime"
            ref={longRestTimeInput}
          />

          <Button
            type="submit"
            aria-label="Salvar configurações"
            title="Salvar configurações"
            color="blue"
          >
            Salvar
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Settings;
