import Button from './button-component';
import Input from './input-component';

const Config = () => {
  return (
    <main className="absolute top-0 left-0 z-20 flex h-screen w-screen items-center justify-center backdrop-brightness-60">
      <div className="w-full max-w-80 rounded-md bg-white p-6">
        <h2 className="mb-4 text-center text-lg font-semibold text-lime-800">
          Configurações
        </h2>
        <form className="flex flex-col gap-4">
          <Input label="Foco" id="focus" />
          <Input label="Descanso curto" id="shortingResting" />
          <Input label="Descanso longo" id="longResting" />
          <Button type="submit">Salvar</Button>
        </form>
      </div>
    </main>
  );
};

export default Config;
