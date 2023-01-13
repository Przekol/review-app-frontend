import React from 'react';
import { Container } from '../Container';
import { Title } from '../form/Title';
import { FormInput } from '../form/FormInput';
import { Submit } from '../form/Submit';
import { CustomLink } from '../CustomLink';
import { PageRouter } from '../../config';
import { commonModalClasses } from '../../utils/theme';
import { FormContainer } from '../form/FormContainer';

export const SignIn = () => {
  return (
    <FormContainer>
      <Container>
        <form className={`${commonModalClasses} w-72`}>
          <Title>Sign In</Title>
          <FormInput name="email" placeholder="joe@example.com" label="Email" type="text" />
          <FormInput name="password" placeholder="*********" label="Password" type="password" />
          <Submit value="Sign In" />
          <div className="flex justify-between">
            <CustomLink to={PageRouter.AUTH_FORGET_PASSWORD}>Forget password</CustomLink>
            <CustomLink to={PageRouter.AUTH_SIGN_UP}>Sign up</CustomLink>
          </div>
        </form>
      </Container>
    </FormContainer>
  );
};
