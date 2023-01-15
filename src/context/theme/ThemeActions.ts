import { Theme, ThemeState } from '../../types';

export const defaultTheme: ThemeState = {
  theme: Theme.DARK,
};

export const getThemeFromLocalStorage = (): Theme => {
  const theme = localStorage.getItem('theme');
  return theme && Object.values(Theme).includes(theme as Theme) ? (theme as Theme) : defaultTheme.theme;
};

export const updateThemeInLocalStorageAndClassList = (theme: Theme) => {
  document.documentElement.classList.remove(...Object.values(Theme));
  document.documentElement.classList.add(theme);
  localStorage.setItem('theme', theme);
};

export const setTheme = (theme: Theme) => {
  return theme === defaultTheme.theme ? Theme.LIGHT : defaultTheme.theme;
};
