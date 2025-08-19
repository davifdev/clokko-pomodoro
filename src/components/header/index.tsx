import { History, MoonIcon, Settings, SunIcon, Timer } from "lucide-react";
import Container from "../container";
import { useEffect, useState } from "react";
import Button from "../button";
import RouterLink from "../router-link";

type ThemeType = "dark" | "light";

const Header = () => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const themeStorage = localStorage.getItem("theme") as ThemeType;
    return themeStorage;
  });

  const handleThemeClick = () => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
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

          <div className="flex items-center justify-between gap-4">
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
            <Button
              className="flex items-center gap-2 cursor-pointer"
              type="button"
              onClick={handleThemeClick}
              aria-label="Alterar tema"
              title="Alterar tema"
            >
              {themeIcon[theme]}
              <span>{theme === "dark" ? "Tema claro" : "Tema escuro"}</span>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
