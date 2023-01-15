import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Title = ({ children }: Props) => {
  return <h1 className="text-xl dark:text-white text-secondary font-semibold text-center">{children}</h1>;
};
