import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignIn } from './components/auth/SignIn';
import { SignUp } from './components/auth/SignUp';
import { EmailVerification } from './components/auth/EmailVerification';
import { ForgetPassword } from './components/auth/ForgetPassword';
import { ConfirmPassword } from './components/auth/ConfirmPassword';
import { pathNames } from './config/path-names';

console.log(pathNames.AUTH_SIGN_IN);
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: pathNames.AUTH_SIGN_IN,
        element: <SignIn />,
      },
      {
        path: pathNames.AUTH_SIGN_UP,
        element: <SignUp />,
      },
      {
        path: pathNames.AUTH_VERIFICATION,
        element: <EmailVerification />,
      },
      {
        path: pathNames.AUTH_FORGET_PASSWORD,
        element: <ForgetPassword />,
      },
      {
        path: pathNames.AUTH_CONFIRM_PASSWORD,
        element: <ConfirmPassword />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
