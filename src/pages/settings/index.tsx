import Container from "../../components/container";

const Settings = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-4 pt-40">
        <h2 className="mb-4 font-semibold text-lg">Configurações</h2>
        <form className="flex flex-col items-center gap-6 mb-5">
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="focus">Tempo de foco</label>
            <input
              type="number"
              defaultValue={25}
              className=" border-3 border-blue-200 p-2 rounded-lg bg-blue-50 text-center"
              id="focus"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="focus">Descanso curto</label>
            <input
              type="number"
              defaultValue={5}
              className=" border-3 border-blue-200 p-2 rounded-lg bg-blue-50 text-center"
              id="shortRestTime"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="focus">Descanso longo</label>
            <input
              type="number"
              defaultValue={15}
              className=" border-3 border-blue-200 p-2 rounded-lg bg-blue-50 text-center"
              id="longRestTime"
            />
          </div>
           <button className="bg-green-500 p-2 text-white rounded-full w-full text-lg font-semibold cursor-pointer">
              Salvar
            </button>
        </form>
      </div>
    </Container>
  );
};

export default Settings;
