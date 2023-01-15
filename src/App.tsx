import React, { useEffect } from 'react';
import { Navbar } from './components/user/Navbar';
import { Outlet } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { updateThemeInLocalStorageAndClassList } from './context/theme';

export function App() {
  const { state } = useTheme();
  useEffect(() => {
    updateThemeInLocalStorageAndClassList(state.theme);
  }, [state.theme]);
  return (
    <>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
