import React from 'react';
import { Container } from '../Container';
import { Title } from '../form/Title';
import { FormInput } from '../form/FormInput';
import { Submit } from '../form/Submit';
import { CustomLink } from '../CustomLink';
import { PathNames } from '../../config';

export const SignIn = () => {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-6 w-72 space-y-6">
          <Title>Sign In</Title>
          <FormInput name="email" placeholder="joe@example.com" label="Email" type="text" />
          <FormInput name="password" placeholder="*********" label="Password" type="password" />
          <Submit value="Sign In" />
          <div className="flex justify-between">
            <CustomLink to={PathNames.AUTH_FORGET_PASSWORD}>Forget password</CustomLink>
            <CustomLink to={PathNames.AUTH_SIGN_UP}>Sign up</CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
};
