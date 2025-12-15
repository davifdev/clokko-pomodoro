import { Link } from 'react-router-dom';
import Container from '../container';
import { MoonIcon, SettingsIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b-2 border-zinc-50">
      <Container>
        <div className="flex items-center justify-between p-6">
          <Link to="/">
            <h1 className="text-2xl font-semibold">Clokko Pomodoro</h1>
          </Link>
          <nav className="flex items-center gap-9">
            <ul className="flex items-center gap-4">
              <li>
                <Link to="/">Pomodoro</Link>
              </li>
              <li>
                <Link to="/history">Histórico</Link>
              </li>
              <li>
                <Link to="/history">Sobre</Link>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <button>
                <SettingsIcon />
              </button>
              <button>
                <MoonIcon />
              </button>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
