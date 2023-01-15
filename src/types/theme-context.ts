import { Dispatch } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
export interface ThemeState {
  theme: Theme;
}
export type ThemeAction = {
  type: 'SET_THEME';
  payload: Theme;
};
export interface ThemeContextType {
  state: ThemeState;
  dispatch: Dispatch<ThemeAction>;
}
