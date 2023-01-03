import React from 'react';
import { Navbar } from './components/user/Navbar';
import { SignIn } from './components/auth/SignIn';

export function App() {
  return (
    <>
      <Navbar />
      <SignIn />
    </>
  );
}
