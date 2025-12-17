import Button from '../components/button-component';
import Container from '../components/container';
import Input from '../components/input-component';

const Home = () => {
  return (
    <main>
      <Container>
        <div className="flex flex-col items-center justify-center gap-10 pt-40">
          <div className="flex items-center gap-12">
            <p className="text-lg font-semibold text-sky-500 dark:text-slate-100">
              Pomodoro
            </p>
            <p className="text-lg font-semibold text-sky-500 dark:text-slate-100">
              Descanso
            </p>
            <p className="text-lg font-semibold text-sky-500 dark:text-slate-100">
              Descanso Longo
            </p>
          </div>
          <div className="flex h-96 w-96 items-center justify-center rounded-full border-4 border-slate-200 bg-zinc-50 p-2 shadow-md dark:border-slate-800 dark:bg-slate-900">
            <p className="text-8xl font-bold text-sky-500 text-shadow-md dark:text-slate-100">
              25:00
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-slate-100"></div>
              <div className="h-4 w-4 rounded-full bg-slate-200"></div>
              <div className="h-4 w-4 rounded-full bg-slate-100"></div>
              <div className="h-4 w-4 rounded-full bg-slate-200"></div>
              <div className="h-4 w-4 rounded-full bg-slate-300"></div>
            </div>
            <Input type="text" placeholder="Digite uma tarefa" />
            <Button className="w-96">Começar</Button>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Home;
