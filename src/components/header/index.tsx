import {
  History,
  Menu,
  MoonIcon,
  Settings,
  SunIcon,
  Timer,
} from "lucide-react";
import Container from "../container";
import { useEffect, useState } from "react";
import Button from "../button";
import RouterLink from "../router-link";

type ThemeType = "dark" | "light";

const Header = () => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const themeStorage =
      (localStorage.getItem("theme") as ThemeType) || "light";
    return themeStorage;
  });
  const [menuToggle, setMenuToggle] = useState(false);

  const handleThemeClick = () => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  };

  const handleToggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeIcon = {
    light: <MoonIcon />,
    dark: <SunIcon />,
  } as const;

  return (
    <header className="p-8">
      <Container>
        <div className="flex items-center justify-between">
          <RouterLink href="/">
            <strong className="text-lg">Clokko Pomodoro</strong>
          </RouterLink>

          <div className="flex items-center gap-8">
            <div className="hidden md:block">
              <nav className="flex items-center justify-between gap-4 ">
                <RouterLink
                  href="/"
                  className="flex items-center gap-2"
                  aria-label="Ir para o pomodoro"
                  title="Ir para o pomodoro"
                >
                  <Timer />
                  <span>Pomodoro</span>
                </RouterLink>
                <RouterLink
                  href="/settings"
                  className="flex items-center gap-2"
                  aria-label="Personalize seu pomodoro"
                  title="Personalize seu pomodoro"
                >
                  <Settings />
                  <span>Personalize</span>
                </RouterLink>
                <RouterLink
                  href="/history"
                  className="flex items-center gap-2"
                  aria-label="Histórico"
                  title="Histórico"
                >
                  <History />
                  <span>Histórico</span>
                </RouterLink>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button
                className="flex items-center gap-2 cursor-pointe"
                type="button"
                onClick={handleThemeClick}
                aria-label="Alterar tema"
                title="Alterar tema"
                color="blue"
              >
                {themeIcon[theme]}
              </Button>
              <button className="cursor-pointer md:hidden" onClick={handleToggleMenu}>
                <Menu />
                <div
                  className={`relative transition-all duration-300 ${
                    menuToggle ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <nav className="flex flex-col items-start gap-6 absolute w-38 h-38 bg-blue-50 dark:bg-gray-800 p-4 rounded-lg right-0 top-5">
                    <RouterLink
                      href="/"
                      className="flex items-center gap-2"
                      aria-label="Ir para o pomodoro"
                      title="Ir para o pomodoro"
                    >
                      <Timer />
                      <span>Pomodoro</span>
                    </RouterLink>
                    <RouterLink
                      href="/settings"
                      className="flex items-center gap-2"
                      aria-label="Personalize seu pomodoro"
                      title="Personalize seu pomodoro"
                    >
                      <Settings />
                      <span>Personalize</span>
                    </RouterLink>
                    <RouterLink
                      href="/history"
                      className="flex items-center gap-2"
                      aria-label="Histórico"
                      title="Histórico"
                    >
                      <History />
                      <span>Histórico</span>
                    </RouterLink>
                  </nav>
                </div>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
