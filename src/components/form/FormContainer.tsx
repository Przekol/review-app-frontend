import * as React from 'react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export const FormContainer = ({ children }: Props) => {
  return (
    <div className="fixed inset-0 dark:bg-primary bg-white -z-10 flex justify-center items-center">{children}</div>
  );
};
