import { getThemeFromLocalStorage } from './ThemeActions';
import { createContext } from 'react';
import { ThemeContextType } from '../../types';

export const initialState = {
  theme: getThemeFromLocalStorage(),
};

const defaultValue = {
  state: initialState,
  dispatch: () => null,
};

export const ThemeContext = createContext<ThemeContextType>(defaultValue);
