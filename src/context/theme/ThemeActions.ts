import { Theme, ThemeState } from '../../types';

export const defaultTheme: ThemeState = {
  theme: Theme.DARK,
};

export const getThemeFromLocalStorage = (): Theme => {
  const theme = localStorage.getItem('theme');
  return theme && Object.values(Theme).includes(theme as Theme) ? (theme as Theme) : defaultTheme.theme;
};
