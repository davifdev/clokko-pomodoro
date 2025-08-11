import Container from "../container";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="text-center mt-10">
          <p >
            <strong>Clokko Pomodoro</strong> - {new Date().getFullYear()} Todos os Direitos
            Reservados &copy;
          </p>
          <a href="#">Entenda sobre a técnina de pomodoro</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
