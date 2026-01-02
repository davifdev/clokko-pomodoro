// Libs
import { Link } from 'react-router-dom';

// Components
import Container from '../components/container';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = 'Sobre - Clokko Pomodoro';
  }, []);

  return (
    <main>
      <Container>
        <div className="pt-20">
          <h2 className="mb-6 text-2xl font-semibold dark:text-slate-100">
            A Técnica Pomodoro 🍅
          </h2>

          <p className="mb-6 dark:text-slate-100">
            A Técnica Pomodoro é uma metodologia de produtividade criada por{' '}
            <strong>Francesco Cirillo</strong>, que consiste em dividir o
            trabalho em blocos de tempo (os famosos "Pomodoros") intercalados
            com pausas. O objetivo é manter o foco total por um período curto e
            garantir descansos para evitar o cansaço mental.
          </p>

          <h2 className="mb-6 text-2xl font-semibold dark:text-slate-100">
            Como funciona o Pomodoro tradicional?
          </h2>
          <ul className="mb-6">
            <li>
              <strong className="dark:text-slate-100">
                1. Defina uma tarefa
              </strong>{' '}
              <span className="dark:text-slate-100">
                que você deseja realizar.
              </span>
            </li>
            <li>
              <strong className="dark:text-slate-100">
                2. Trabalhe nela por 25 minutos
              </strong>{' '}
              <span className="dark:text-slate-100">sem interrupções.</span>
            </li>
            <li>
              <strong className="dark:text-slate-100">
                3. Faça uma pausa curta de 5 minutos
              </strong>
              .
            </li>
            <li>
              <strong className="dark:text-slate-100">
                4. A cada 4 ciclos, faça uma pausa longa
              </strong>{' '}
              <span className="dark:text-slate-100">
                (geralmente 15 a 30 minutos)
              </span>
              .
            </li>
          </ul>

          <h2 className="mb-6 text-2xl font-semibold dark:text-slate-100">
            Mas no <strong>Clokko Pomodoro</strong> tem um diferencial 🚀
          </h2>

          <p className="mb-6 dark:text-slate-100">
            Nosso app segue o conceito original, mas com algumas melhorias e
            personalizações pra deixar o processo ainda mais eficiente:
          </p>

          <h3 className="text-1xl mb-6 font-semibold dark:text-slate-100">
            ⚙️ Personalização do tempo
          </h3>
          <p className="mb-6 dark:text-slate-100">
            Você pode configurar o tempo de foco, descanso curto e descanso
            longo do jeito que quiser! Basta acessar a{' '}
            <Link to="/settings">página de configurações</Link> e ajustar os
            minutos como preferir.
          </p>

          <h3 className="text-1xl mb-6 font-semibold dark:text-slate-100">
            🔁 Ciclos organizados em sequência
          </h3>
          <p className="mb-6 dark:text-slate-100">
            A cada ciclo completado, uma nova task é adicionada automaticamente
            ao seu histórico, e o app já sugere o próximo ciclo (foco ou
            descanso).
          </p>
          <p className="mb-6 dark:text-slate-100">
            <strong>Nosso padrão:</strong>
          </p>
          <ul className="mb-6">
            <li className="dark:text-slate-100">
              Ciclos <strong>ímpares</strong>: Trabalho (foco).
            </li>
            <li className="dark:text-slate-100">
              Ciclos <strong>pares</strong>: Descanso curto.
            </li>
            <li className="dark:text-slate-100">
              Ciclo <strong>8</strong>: Descanso longo especial, pra resetar o
              ciclo completo.
            </li>
          </ul>

          <h3 className="text-1xl mb-6 font-semibold dark:text-slate-100">
            🍅 Visualização dos ciclos
          </h3>
          <p className="mb-6 dark:text-slate-100">
            Logo abaixo do cronômetro, você verá bolinhas coloridas
            representando os ciclos:
          </p>
          <ul className="mb-6">
            <li className="dark:text-slate-100">
              🟢 Verde: Ciclo de trabalho (foco).
            </li>
            <li className="dark:text-slate-100">
              {' '}
              🔴 Vermelho: Descanso curto.
            </li>
            <li className="dark:text-slate-100">
              🟡 Amarelo: Descanso longo (aparece a cada 8 ciclos).
            </li>
          </ul>

          <p className="mb-6 dark:text-slate-100">
            Assim, você sempre sabe em que parte do processo está e o que vem a
            seguir. Não precisa mais anotar no papel ou ficar calculando de
            cabeça!
          </p>

          <h3 className="text-1xl mb-6 font-semibold dark:text-slate-100">
            📊 Histórico automático
          </h3>
          <p className="mb-6 dark:text-slate-100">
            Todas as suas tarefas e ciclos concluídos ficam salvos no{' '}
            <Link to="/history">histórico</Link>, com status de completas ou
            interrompidas. Assim, você consegue acompanhar sua evolução ao longo
            do tempo.
          </p>

          <h2 className="mb-6 text-2xl font-semibold dark:text-slate-100">
            Por que usar o Clokko Pomodoro?
          </h2>
          <ul className="mb-6">
            <li className="dark:text-slate-100">
              ✅ Organize seu foco com clareza.
            </li>
            <li className="dark:text-slate-100">
              ✅ Trabalhe e descanse na medida certa.
            </li>
            <li className="dark:text-slate-100">
              ✅ Personalize seus próprios ciclos e tempos.
            </li>
            <li className="dark:text-slate-100">
              ✅ Acompanhe seu histórico automaticamente.
            </li>
          </ul>

          <p className="mb-6 dark:text-slate-100">
            <strong>Pronto pra focar?</strong> Bora lá{' '}
            <Link to="/">voltar para a página inicial</Link> e iniciar seus
            Pomodoros! 🍅🚀
          </p>

          <p className="mb-4 dark:text-slate-100">
            <em>"Foco total, sem pressa, sem pausa, só vai!"</em> 💪🧘‍♂️
          </p>
        </div>
      </Container>
    </main>
  );
};

export default About;
