import Button from "../button";
import Container from "../container";
import Countdown from "../countdown";
import Input from "../input";

const Pomodoro = () => {
  return (
    <Container>
      <div className="pt-10 flex flex-col items-center justify-center gap-12">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-lg border-b-2 border-b-blue-500 p-2">
            <span>Pomodoro</span>
            <strong>0</strong>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <span>Descanso</span>
            <strong>0</strong>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <span>Longo descanso</span>
            <strong>0</strong>
          </div>
        </div>
        <div>
          <form className="flex flex-col items-center gap-12">
            <div className="w-[364px] h-[364px] rounded-full bg-blue-50 dark:bg-gray-900 flex items-center justify-center flex-col  gap-6 border-4 border-blue-200 dark:border-gray-800">
              <Countdown />
              <div className="flex flex-col text-center text-lg">
                <span>Foque por:</span>
                <strong>15min</strong>
              </div>
            </div>

            <Input
              type="text"
              placeholder="Digite uma tarefa"
              className="text-center border-2 border-blue-200 p-2 rounded-lg bg-blue-50 dark:bg-gray-900 dark:border-gray-800"
            />

            <Button
              className="bg-blue-600 p-4 text-white rounded-full w-full text-lg font-semibold cursor-pointer"
              type="submit"
            >
              Iniciar
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};
export default Pomodoro;
