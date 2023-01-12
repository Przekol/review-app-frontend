import * as React from 'react';
import { createContext, ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
}
interface Theme {
  toggleTheme: () => void;
}
const defaultTheme = 'light';
const darkTheme = 'dark';

const getThemeFromLocalStorage = () => localStorage.getItem('theme');
const updateTheme = (theme: string, themeToRemove: string | null = null) => {
  if (themeToRemove) document.documentElement.classList.remove(themeToRemove);
  document.documentElement.classList.add(theme);
  localStorage.setItem('theme', theme);
};

export const ThemeContext = createContext<Theme | null>(null);

export const ThemeProvider = ({ children }: Props) => {
  const toggleTheme = () => {
    const oldTheme = getThemeFromLocalStorage();
    const newTheme = oldTheme === defaultTheme ? darkTheme : defaultTheme;
    updateTheme(newTheme, oldTheme);
  };
  useEffect(() => {
    const theme = getThemeFromLocalStorage();
    if (!theme) updateTheme(defaultTheme);
    else updateTheme(theme);
  }, []);

  return <ThemeContext.Provider value={{ toggleTheme }}>{children}</ThemeContext.Provider>;
};
