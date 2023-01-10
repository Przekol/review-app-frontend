import React from 'react';
import { Container } from '../Container';
import { Title } from '../form/Title';
import { FormInput } from '../form/FormInput';
import { Submit } from '../form/Submit';
import { CustomLink } from '../CustomLink';
import { PathNames } from '../../config';

export const ForgetPassword = () => {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-6 w-96 space-y-6">
          <Title>Please Enter Your Email</Title>
          <FormInput name="email" placeholder="joe@example.com" label="Email" type="text" />
          <Submit value="Send Link" />
          <div className="flex justify-between">
            <CustomLink to={PathNames.AUTH_SIGN_IN}>Sign in</CustomLink>
            <CustomLink to={PathNames.AUTH_SIGN_UP}>Sign up</CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
};
