import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  to: string;
}

export const CustomLink = ({ children, to }: Props) => {
  return (
    <Link className="text-dark-subtle hover:text-white transition" to={to}>
      {children}
    </Link>
  );
};
