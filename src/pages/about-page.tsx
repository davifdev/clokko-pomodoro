import { Link } from 'react-router-dom';
import Container from '../components/container';

const About = () => {
  return (
    <main>
      <Container>
        <div className="pt-40">
          <h2 className="mb-6 text-2xl font-semibold text-lime-800">
            A Técnica Pomodoro 🍅
          </h2>

          <p className="mb-6 text-lime-700">
            A Técnica Pomodoro é uma metodologia de produtividade criada por{' '}
            <strong>Francesco Cirillo</strong>, que consiste em dividir o
            trabalho em blocos de tempo (os famosos "Pomodoros") intercalados
            com pausas. O objetivo é manter o foco total por um período curto e
            garantir descansos para evitar o cansaço mental.
          </p>

          <h2 className="mb-6 text-2xl font-semibold text-lime-800">
            Como funciona o Pomodoro tradicional?
          </h2>
          <ul className="mb-6">
            <li>
              <strong className="text-lime-800">1. Defina uma tarefa</strong>{' '}
              <span className="text-lime-700">que você deseja realizar.</span>
            </li>
            <li>
              <strong className="text-lime-800">
                2. Trabalhe nela por 25 minutos
              </strong>{' '}
              <span className="text-lime-700">sem interrupções.</span>
            </li>
            <li>
              <strong className="text-lime-800">
                3. Faça uma pausa curta de 5 minutos
              </strong>
              .
            </li>
            <li>
              <strong className="text-lime-800">
                4. A cada 4 ciclos, faça uma pausa longa
              </strong>{' '}
              <span className="text-lime-700">
                (geralmente 15 a 30 minutos)
              </span>
              .
            </li>
          </ul>

          <h2 className="mb-6 text-2xl font-semibold text-lime-800">
            Mas no <strong>Chronos Pomodoro</strong> tem um diferencial 🚀
          </h2>

          <p className="mb-6 text-lime-700">
            Nosso app segue o conceito original, mas com algumas melhorias e
            personalizações pra deixar o processo ainda mais eficiente:
          </p>

          <h3 className="text-1xl mb-6 font-semibold text-lime-800">
            ⚙️ Personalização do tempo
          </h3>
          <p className="mb-6 text-lime-700">
            Você pode configurar o tempo de foco, descanso curto e descanso
            longo do jeito que quiser! Basta acessar a{' '}
            <Link to="/settings">página de configurações</Link> e ajustar os
            minutos como preferir.
          </p>

          <h3 className="text-1xl mb-6 font-semibold text-lime-800">
            🔁 Ciclos organizados em sequência
          </h3>
          <p className="mb-6 text-lime-700">
            A cada ciclo completado, uma nova task é adicionada automaticamente
            ao seu histórico, e o app já sugere o próximo ciclo (foco ou
            descanso).
          </p>
          <p className="mb-6 text-lime-800">
            <strong>Nosso padrão:</strong>
          </p>
          <ul className="mb-6">
            <li className="text-lime-700">
              Ciclos <strong>ímpares</strong>: Trabalho (foco).
            </li>
            <li className="text-lime-700">
              Ciclos <strong>pares</strong>: Descanso curto.
            </li>
            <li className="text-lime-700">
              Ciclo <strong>8</strong>: Descanso longo especial, pra resetar o
              ciclo completo.
            </li>
          </ul>

          <h3 className="text-1xl mb-6 font-semibold text-lime-800">
            🍅 Visualização dos ciclos
          </h3>
          <p className="mb-6 text-lime-700">
            Logo abaixo do cronômetro, você verá bolinhas coloridas
            representando os ciclos:
          </p>
          <ul className="mb-6">
            <li className="text-lime-700">
              🟡 Amarelo: Ciclo de trabalho (foco).
            </li>
            <li className="text-lime-700">🟢 Verde: Descanso curto.</li>
            <li className="text-lime-700">
              🔵 Azul: Descanso longo (aparece a cada 8 ciclos).
            </li>
          </ul>

          <p className="mb-6 text-lime-700">
            Assim, você sempre sabe em que parte do processo está e o que vem a
            seguir. Não precisa mais anotar no papel ou ficar calculando de
            cabeça!
          </p>

          <h3 className="text-1xl mb-6 font-semibold text-lime-800">
            📊 Histórico automático
          </h3>
          <p className="mb-6 text-lime-700">
            Todas as suas tarefas e ciclos concluídos ficam salvos no{' '}
            <Link to="/history">histórico</Link>, com status de completas ou
            interrompidas. Assim, você consegue acompanhar sua evolução ao longo
            do tempo.
          </p>

          <h2 className="mb-6 text-2xl font-semibold text-lime-800">
            Por que usar o Chronos Pomodoro?
          </h2>
          <ul className="mb-6">
            <li className="text-lime-700">✅ Organize seu foco com clareza.</li>
            <li className="text-lime-700">
              ✅ Trabalhe e descanse na medida certa.
            </li>
            <li className="text-lime-700">
              ✅ Personalize seus próprios ciclos e tempos.
            </li>
            <li className="text-lime-700">
              ✅ Acompanhe seu histórico automaticamente.
            </li>
          </ul>

          <p className="mb-6 text-lime-700">
            <strong>Pronto pra focar?</strong> Bora lá{' '}
            <Link to="/">voltar para a página inicial</Link> e iniciar seus
            Pomodoros! 🍅🚀
          </p>

          <p className="text-lime-700">
            <em>"Foco total, sem pressa, sem pausa, só vai!"</em> 💪🧘‍♂️
          </p>
        </div>
      </Container>
    </main>
  );
};

export default About;
