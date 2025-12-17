import { Link } from 'react-router-dom';
import Container from './container';
import { MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import Config from './config-component';
import RouterLink from './router-link';

type ThemeType = 'light' | 'dark';

const Header = () => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const savedTheme = (localStorage.getItem('theme') as ThemeType) || 'light';
    return savedTheme;
  });
  const [openConfig, setOpenConfig] = useState(false);

  const toggleTheme = () => {
    console.log('Toggling theme');
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleIcon = {
    light: <MoonIcon className="text-sky-500 dark:text-slate-100" size={18} />,
    dark: <SunIcon className="text-sky-500 dark:text-slate-100" size={18} />,
  } as const;

  const toggleConfig = () => {
    setOpenConfig(!openConfig);
  };

  return (
    <header className="fixed z-10 w-full border-b-2 border-zinc-50 bg-white dark:border-slate-800 dark:bg-slate-900">
      <Container>
        <div className="flex items-center justify-between p-6">
          <Link to="/">
            <h1 className="text-2xl font-semibold text-sky-500 text-shadow-sm dark:text-slate-100">
              Clokko Pomodoro
            </h1>
          </Link>
          <nav className="flex items-center gap-10">
            <ul className="flex items-center gap-4">
              <li>
                <RouterLink href="/" text="Pomodoro" />
              </li>
              <li>
                <RouterLink href="/history" text="Histórico" />
              </li>
              <li className="text-sky-600">
                <RouterLink href="/about" text="Sobre" />
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <button onClick={toggleConfig}>
                <SettingsIcon
                  className="text-sky-500 dark:text-slate-100"
                  size={18}
                />
              </button>
              <button onClick={toggleTheme}>{toggleIcon[theme]}</button>
            </div>
          </nav>
        </div>
      </Container>
      <Config openConfig={openConfig} toggleConfig={toggleConfig} />
    </header>
  );
};

export default Header;
