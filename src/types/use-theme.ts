import { ThemeContextType } from './theme-context';

export type UseThemeMethods = {
  toggleTheme: () => void;
};
export type UseThemeType = ThemeContextType & UseThemeMethods;
