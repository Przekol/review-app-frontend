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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'auth/signin',
        element: <SignIn />,
      },
      {
        path: 'auth/signup',
        element: <SignUp />,
      },
      {
        path: 'auth/verification',
        element: <EmailVerification />,
      },
      {
        path: 'auth/forget-password',
        element: <ForgetPassword />,
      },
      {
        path: 'auth/confirm-password',
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
