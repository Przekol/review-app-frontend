import React from 'react';
import { Navbar } from './components/user/Navbar';
import { Outlet } from 'react-router-dom';

export function App() {
  return (
    <>
      {<Navbar />}
      <div id="detail">{<Outlet />}</div>
    </>
  );
}
