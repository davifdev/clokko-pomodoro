// Libs
import { MenuIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import RouterLink from './router-link';

// Components
import Container from './container';
import Config from './config-component';

// Utils
import { useEffect, useState } from 'react';
import Button from './button-component';

type ThemeType = 'light' | 'dark';

const Header = () => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const savedTheme = (localStorage.getItem('theme') as ThemeType) || 'light';
    return savedTheme;
  });
  const [openConfig, setOpenConfig] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleIcon = {
    light: <MoonIcon className="text-blue-300 dark:text-slate-100" size={18} />,
    dark: <SunIcon className="text-blue-300 dark:text-slate-100" size={18} />,
  } as const;

  const toggleConfig = () => {
    setOpenConfig(!openConfig);
  };

  const openMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleMouseLeave = () => {
    openMenu();
  };

  return (
    <header className="z-10 w-full border-b-2 border-zinc-50 bg-white dark:border-slate-800 dark:bg-slate-900">
      <Container>
        <div className="flex items-center justify-between p-6">
          <Link to="/">
            <h1 className="text-2xl font-semibold text-blue-300 dark:text-slate-100">
              Clokko Pomodoro
            </h1>
          </Link>
          <nav className="flex items-center gap-10">
            <ul className="hidden items-center gap-4 md:flex">
              <li>
                <RouterLink href="/" text="Pomodoro" />
              </li>
              <li>
                <RouterLink href="/history" text="Histórico" />
              </li>
              <li>
                <RouterLink href="/about" text="Sobre" />
              </li>
            </ul>
            <div className="flex items-center">
              <Button
                onClick={toggleConfig}
                color="icon"
                title="Configurações"
                aria-label="Configurações"
              >
                <SettingsIcon
                  className="text-blue-300 dark:text-slate-100"
                  size={18}
                />
              </Button>
              <Button
                onClick={toggleTheme}
                color="icon"
                title={`Tema ${theme === 'light' ? 'Escuro' : 'Claro'}`}
                aria-label={`Tema ${theme === 'light' ? 'Escuro' : 'Claro'}`}
              >
                {toggleIcon[theme]}
              </Button>
              <Button
                onClick={openMenu}
                color="icon"
                title="Menu"
                aria-label="Menu"
                className="block md:hidden"
              >
                <MenuIcon
                  className="text-blue-300 dark:text-slate-100"
                  size={18}
                />
              </Button>
              <div
                className={`absolute top-22 right-10 h-44 w-44 rounded-md bg-white p-6 shadow transition-all duration-300 dark:bg-slate-700 ${isOpenMenu ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
                onMouseLeave={handleMouseLeave}
              >
                <ul className="flex flex-col items-start gap-6">
                  <li>
                    <RouterLink href="/" text="Pomodoro" />
                  </li>
                  <li>
                    <RouterLink href="/history" text="Histórico" />
                  </li>
                  <li>
                    <RouterLink href="/about" text="Sobre" />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </Container>
      <Config openConfig={openConfig} toggleConfig={toggleConfig} />
    </header>
  );
};

export default Header;
