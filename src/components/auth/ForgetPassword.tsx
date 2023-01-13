import React from 'react';
import { Container } from '../Container';
import { Title } from '../form/Title';
import { FormInput } from '../form/FormInput';
import { Submit } from '../form/Submit';
import { CustomLink } from '../CustomLink';
import { PageRouter } from '../../config';
import { FormContainer } from '../form/FormContainer';
import { commonModalClasses } from '../../utils/theme';

export const ForgetPassword = () => {
  return (
    <FormContainer>
      <Container>
        <form className={`${commonModalClasses} w-96`}>
          <Title>Please Enter Your Email</Title>
          <FormInput name="email" placeholder="joe@example.com" label="Email" type="text" />
          <Submit value="Send Link" />
          <div className="flex justify-between">
            <CustomLink to={PageRouter.AUTH_SIGN_IN}>Sign in</CustomLink>
            <CustomLink to={PageRouter.AUTH_SIGN_UP}>Sign up</CustomLink>
          </div>
        </form>
      </Container>
    </FormContainer>
  );
};
