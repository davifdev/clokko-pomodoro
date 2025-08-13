import Button from "../../components/button";
import Container from "../../components/container";
import Input from "../../components/input";
import Title from "../../components/title";

const Settings = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-4 pt-40">
        <Title>Configurações</Title>
        <form className="flex flex-col items-center gap-6 mb-5">
          <Input
            defaultValue={25}
            type="number"
            labelText="Tempo de foco"
            id="focus"
          />
          <Input
            defaultValue={5}
            type="number"
            labelText="Descanso curto"
            id="shortRestTime"
          />
          <Input
            defaultValue={15}
            type="number"
            labelText="Descanso longo"
            id="longRestTime"
          />

          <Button
            className="bg-blue-600 p-2 text-white rounded-full w-full text-lg font-semibold cursor-pointer"
            type="submit"
            aria-label="Salvar configurações"
            title="Salvar configurações"
          >
            Salvar
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Settings;
