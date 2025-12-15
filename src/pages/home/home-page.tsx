import Container from '../../components/container';
import Header from '../../components/header/header-component';

const Home = () => {
  return (
    <main>
      <Header />
      <Container>
        <div className="flex flex-col items-center justify-center gap-10 pt-20">
          <div className="flex items-center gap-8">
            <p className="text-lg font-semibold text-lime-800">Pomodoro</p>
            <p className="text-lg font-semibold text-lime-800">Descanso</p>
            <p className="text-lg font-semibold text-lime-800">
              Descanso Longo
            </p>
          </div>
          <div className="flex h-96 w-96 items-center justify-center rounded-full bg-zinc-50 p-2">
            <p className="text-8xl font-bold text-lime-600">25:00</p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2 p-4">
              <div className="h-4 w-4 rounded-full bg-lime-100"></div>
              <div className="h-4 w-4 rounded-full bg-lime-200"></div>
              <div className="h-4 w-4 rounded-full bg-lime-100"></div>
              <div className="h-4 w-4 rounded-full bg-lime-200"></div>
              <div className="h-4 w-4 rounded-full bg-lime-300"></div>
            </div>
            <button className="w-96 rounded-md bg-lime-600 p-2 font-semibold text-white">
              Começar
            </button>
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
