import React from 'react';
import { Container } from '../Container';
import { Title } from '../form/Title';
import { FormInput } from '../form/FormInput';
import { Submit } from '../form/Submit';

export const SignUp = () => {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-6 w-72 space-y-6">
          <Title>Sign Up</Title>
          <FormInput name="name" placeholder="Joe Doe" label="Name" type="text" />
          <FormInput name="email" placeholder="joe@example.com" label="Email" type="text" />
          <FormInput name="password" placeholder="*********" label="Password" type="password" />
          <Submit value="Sign Up" />
          <div className="flex justify-between">
            <a className="text-dark-subtle hover:text-white transition" href="#">
              Forget password
            </a>
            <a className="text-dark-subtle hover:text-white transition" href="#">
              Sign in
            </a>
          </div>
        </form>
      </Container>
    </div>
  );
};
