import Container from '../components/container';
import RouterLink from '../components/router-link';

const NotFound = () => {
  return (
    <Container>
      <main className="pt-20">
        <h2 className="mb-6 text-2xl font-semibold dark:text-slate-100">
          404 - Página não encontrada 🚀
        </h2>
        <p className="mb-6">
          Opa! Parece que a página que você está tentando acessar não existe.
          Talvez ela tenha tirado férias, resolvido explorar o universo ou se
          perdido em algum lugar entre dois buracos negros. 🌌
        </p>
        <p className="mb-6">
          Mas calma, você não está perdido no espaço (ainda). Dá pra voltar em
          segurança para a <RouterLink href="/" text="página principal" /> ou{' '}
          <RouterLink href="/history" text="para o histórico" /> — ou pode ficar
          por aqui e fingir que achou uma página secreta que só os exploradores
          mais legais conseguem acessar. 🧭✨
        </p>
        <p className="mb-6">
          Se você acha que essa página deveria existir (ou se quiser bater um
          papo sobre viagem no tempo e buracos de minhoca), é só entrar em
          contato. Caso contrário, use o menu para voltar ao mundo real.
        </p>
        <p className="mb-6">
          Enquanto isso, fica aqui uma reflexão: "Se uma página não existe na
          internet, será que ela existiu de verdade?" 🤔💭
        </p>
      </main>
    </Container>
  );
};

export default NotFound;
