import { Link, NavLink } from 'react-router-dom';
import Container from '../container';
import { MoonIcon, SettingsIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed z-10 w-full border-b-2 border-zinc-50 bg-white">
      <Container>
        <div className="flex items-center justify-between p-6">
          <Link to="/">
            <h1 className="text-2xl font-semibold text-lime-800">
              Clokko Pomodoro
            </h1>
          </Link>
          <nav className="flex items-center gap-9">
            <ul className="flex items-center gap-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'text-lime-800' : 'text-lime-600'
                  }
                >
                  Pomodoro
                </NavLink>
              </li>
              <li className="text-lime-600">
                <NavLink
                  to="/history"
                  className={({ isActive }) =>
                    isActive ? 'text-lime-800' : 'text-lime-600'
                  }
                >
                  Histórico
                </NavLink>
              </li>
              <li className="text-lime-600">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? 'text-lime-800' : 'text-lime-600'
                  }
                >
                  Sobre
                </NavLink>
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
