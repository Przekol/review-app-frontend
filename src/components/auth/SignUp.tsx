import React from 'react';
import { Container } from '../Container';
import { Title } from '../form/Title';
import { FormInput } from '../form/FormInput';
import { Submit } from '../form/Submit';
import { CustomLink } from '../CustomLink';
import { pathNames } from '../../config/path-names';

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
            <CustomLink to={pathNames.AUTH_FORGET_PASSWORD}>Forget password</CustomLink>
            <CustomLink to={pathNames.AUTH_SIGN_IN}>Sign in</CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
};
