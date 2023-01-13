import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { PageRouter } from './page-router';
import { SignIn } from '../components/auth/SignIn';
import { SignUp } from '../components/auth/SignUp';
import { EmailVerification } from '../components/auth/EmailVerification';
import { ForgetPassword } from '../components/auth/ForgetPassword';
import { ConfirmPassword } from '../components/auth/ConfirmPassword';
import React from 'react';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: PageRouter.AUTH_SIGN_IN,
        element: <SignIn />,
      },
      {
        path: PageRouter.AUTH_SIGN_UP,
        element: <SignUp />,
      },
      {
        path: PageRouter.AUTH_VERIFICATION,
        element: <EmailVerification />,
      },
      {
        path: PageRouter.AUTH_FORGET_PASSWORD,
        element: <ForgetPassword />,
      },
      {
        path: PageRouter.AUTH_CONFIRM_PASSWORD,
        element: <ConfirmPassword />,
      },
    ],
  },
]);
