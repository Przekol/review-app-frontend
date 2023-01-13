import { Action, Theme, ThemeState } from '../../types';

export const updateTheme = (theme: Theme) => {
  document.documentElement.classList.remove(...Object.values(Theme));
  document.documentElement.classList.add(theme);
  localStorage.setItem('theme', theme);
};

export const themeReducer = (state: ThemeState, action: Action) => {
  switch (action.type) {
    case 'SET_THEME':
      updateTheme(action.payload);
      return { theme: action.payload };
    default:
      return state;
  }
};
