import Button from '../components/button-component';
import Container from '../components/container';
import Input from '../components/input-component';

const Home = () => {
  return (
    <main>
      <Container>
        <div className="flex flex-col items-center justify-center gap-10 pt-40">
          <div className="flex items-center gap-12">
            <p className="text-lg font-semibold text-lime-800">Pomodoro</p>
            <p className="text-lg font-semibold text-lime-800">Descanso</p>
            <p className="text-lg font-semibold text-lime-800">
              Descanso Longo
            </p>
          </div>
          <div className="flex h-96 w-96 items-center justify-center rounded-full border-4 border-lime-200 bg-zinc-50 p-2">
            <p className="text-8xl font-bold text-lime-800">25:00</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-lime-100"></div>
              <div className="h-4 w-4 rounded-full bg-lime-200"></div>
              <div className="h-4 w-4 rounded-full bg-lime-100"></div>
              <div className="h-4 w-4 rounded-full bg-lime-200"></div>
              <div className="h-4 w-4 rounded-full bg-lime-300"></div>
            </div>
            <Input type="text" placeholder="Digite uma tarefa" />
            <Button className="w-96">Começar</Button>
          </div>

          <p className="text-lime-800">
            <strong>Clokko Pomodoro</strong> - 2025 Todos os Direitos Reservados
            &copy;
          </p>
        </div>
      </Container>
    </main>
  );
};

export default Home;
