import React from 'react';
import { Navbar } from './components/user/Navbar';
import { SignUp } from './components/auth/SignUp';

export function App() {
  return (
    <>
      <Navbar />
      <SignUp />
    </>
  );
}
