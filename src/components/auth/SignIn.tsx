import React from 'react';
import { Container } from '../Container';

export const SignIn = () => {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-6 w-72">
          <h1 className="text-xl text-white font-semibold text-center">Sign In</h1>
          <div className="flex flex-col-reverse">
            <input
              id="email"
              type="text"
              className="bg-transparent rounded border-2 border-dark-subtle focus:border-white p-1 w-full text-lg text-white outline-none peer"
              placeholder="john@email.com"
            />
            <label
              htmlFor="email"
              className="font-semibold text-dark-subtle peer-focus:text-white transition self-start"
            >
              Email
            </label>
          </div>
        </form>
      </Container>
    </div>
  );
};
