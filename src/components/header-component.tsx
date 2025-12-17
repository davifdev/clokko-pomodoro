import { Link, NavLink } from 'react-router-dom';
import Container from './container';
import { MoonIcon, SettingsIcon } from 'lucide-react';
// import Config from './config-component';
const Header = () => {
  return (
    <header className="fixed z-10 w-full border-b-2 border-zinc-50 bg-white dark:border-slate-800 dark:bg-slate-900">
      <Container>
        <div className="flex items-center justify-between p-6">
          <Link to="/">
            <h1 className="text-2xl font-semibold text-sky-500 text-shadow-sm dark:text-slate-100">
              Clokko Pomodoro
            </h1>
          </Link>
          <nav className="flex items-center gap-9">
            <ul className="flex items-center gap-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-sky-600 dark:text-slate-300'
                      : 'text-sky-500 dark:text-slate-100'
                  }
                >
                  <strong>Pomodoro</strong>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/history"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-sky-600 dark:text-slate-300'
                      : 'text-sky-500 dark:text-slate-100'
                  }
                >
                  <strong>Histórico</strong>
                </NavLink>
              </li>
              <li className="text-sky-600">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-sky-600 dark:text-slate-300'
                      : 'text-sky-500 dark:text-slate-100'
                  }
                >
                  <strong>Sobre</strong>
                </NavLink>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <button>
                <SettingsIcon
                  className="text-sky-500 dark:text-slate-100"
                  size={18}
                />
              </button>
              <button>
                <MoonIcon
                  className="text-sky-500 dark:text-slate-100"
                  size={18}
                />
              </button>
            </div>
          </nav>
        </div>
      </Container>
      {/* <Config /> */}
    </header>
  );
};

export default Header;
