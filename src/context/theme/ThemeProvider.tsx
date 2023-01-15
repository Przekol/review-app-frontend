import * as React from 'react';
import { ReactNode, useReducer } from 'react';
import { initialState, ThemeContext } from './ThemeContext';
import { themeReducer } from './ThemeReducer';

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};
