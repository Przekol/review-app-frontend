import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  to: string;
}

export const CustomLink = ({ children, to }: Props) => {
  return (
    <Link
      className="dark:text-dark-subtle text-light-subtle dark:hover:text-white hover:text-primary  transition"
      to={to}
    >
      {children}
    </Link>
  );
};
