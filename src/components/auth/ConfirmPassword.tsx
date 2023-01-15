import React from 'react';
import { Container } from '../Container';
import { Title } from '../form/Title';
import { FormInput } from '../form/FormInput';
import { Submit } from '../form/Submit';
import { FormContainer } from '../form/FormContainer';
import { commonModalClasses } from '../../utils/theme';

export const ConfirmPassword = () => {
  return (
    <FormContainer>
      <Container>
        <form className={`${commonModalClasses} w-96`}>
          <Title>Enter New Password</Title>
          <FormInput name="password" placeholder="*********" label="New Password" type="password" />
          <FormInput name="confirmPassword" placeholder="*********" label="Confirm Password" type="password" />
          <Submit value="Confirm Password" />
        </form>
      </Container>
    </FormContainer>
  );
};
