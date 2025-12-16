const Config = () => {
  return (
    <main className="absolute top-0 left-0 z-20 flex h-screen w-screen items-center justify-center backdrop-brightness-60">
      <div className="w-full max-w-80 rounded-md bg-white p-6">
        <h2 className="mb-4 text-center text-lg font-semibold text-lime-800">
          Configurações
        </h2>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col text-center">
            <label htmlFor="focus" className="font-bold text-lime-800">
              Foco
            </label>
            <input
              type="text"
              className="rounded-md bg-zinc-50 p-2 text-center text-lime-800 outline-0"
            />
          </div>
          <div className="flex flex-col text-center">
            <label htmlFor="focus" className="font-bold text-lime-800">
              Descanso curto
            </label>
            <input
              type="text"
              className="rounded-md bg-zinc-50 p-2 text-center text-lime-800 outline-0"
            />
          </div>
          <div className="flex flex-col text-center">
            <label htmlFor="focus" className="font-bold text-lime-800">
              Descanso longo
            </label>
            <input
              type="text"
              className="rounded-md bg-zinc-50 p-2 text-center text-lime-800 outline-0"
            />
          </div>
          <button className="w-full rounded-md bg-lime-600 p-2 text-white">
            Salvar
          </button>
        </form>
      </div>
    </main>
  );
};

export default Config;
