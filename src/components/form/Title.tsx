import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Title = ({ children }: Props) => {
  return <h1 className="text-xl text-white font-semibold text-center">{children}</h1>;
};
