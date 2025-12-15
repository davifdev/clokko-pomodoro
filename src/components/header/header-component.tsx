import { Link } from 'react-router-dom';
import Container from '../container';
import { MoonIcon, SettingsIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b-2 border-zinc-50">
      <Container>
        <div className="flex items-center justify-between p-6">
          <Link to="/">
            <h1 className="text-2xl font-semibold text-lime-800">
              Clokko Pomodoro
            </h1>
          </Link>
          <nav className="flex items-center gap-9">
            <ul className="flex items-center gap-4">
              <li className="text-lime-600">
                <Link to="/">Pomodoro</Link>
              </li>
              <li className="text-lime-600">
                <Link to="/history">Histórico</Link>
              </li>
              <li className="text-lime-600">
                <Link to="/history">Sobre</Link>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <button>
                <SettingsIcon className="text-lime-800" />
              </button>
              <button>
                <MoonIcon className="text-lime-800" />
              </button>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
