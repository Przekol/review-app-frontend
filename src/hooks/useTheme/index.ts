import { useContext } from 'react';
import { setTheme, ThemeContext } from '../../context/theme';
import { UseThemeType } from '../../types';

export const useTheme = (): UseThemeType => {
  const { state, dispatch } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = setTheme(state.theme);
    dispatch({ type: 'SET_THEME', payload: newTheme });
  };

  return { state, dispatch, toggleTheme };
};
