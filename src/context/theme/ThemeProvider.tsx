import * as React from 'react';
import { ReactNode, useEffect, useReducer } from 'react';
import { defaultTheme } from './ThemeActions';
import { initialState, ThemeContext } from './ThemeContext';
import { themeReducer, updateTheme } from './ThemeReducer';
import { Theme } from '../../types';

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const toggleTheme = () => {
    const newTheme = state.theme === defaultTheme.theme ? Theme.LIGHT : defaultTheme.theme;
    dispatch({ type: 'SET_THEME', payload: newTheme });
  };

  useEffect(() => {
    updateTheme(state.theme);
  }, [state.theme]);

  return <ThemeContext.Provider value={{ state, toggleTheme }}>{children}</ThemeContext.Provider>;
};
