import { ThemeAction, ThemeState } from '../../types';

export const themeReducer = (state: ThemeState, action: ThemeAction) => {
  switch (action.type) {
    case 'SET_THEME':
      return { theme: action.payload };
    default:
      return state;
  }
};
