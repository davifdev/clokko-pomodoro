import { History, MoonIcon, Settings, Timer } from "lucide-react";
import Container from "../container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-8">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/">
            <strong className="text-lg">Clokko Pomodoro</strong>
          </Link>

          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-2">
              <Timer />
              <span>Pomodoro</span>
            </Link>
            <Link to="/settings" className="flex items-center gap-2">
              <Settings />
              <span>Personalize</span>
            </Link>
            <Link to="/history" className="flex items-center gap-2">
              <History />
              <span>Histórico</span>
            </Link>
            <button className="flex items-center gap-2">
              <MoonIcon />
              <span>Tema escuro</span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
