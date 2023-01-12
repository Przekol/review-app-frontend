import React from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { Container } from '../Container';
import { Link } from 'react-router-dom';
import { PathsNames } from '../../config';
import { useTheme } from '../../hooks/useTheme';

export const Navbar = () => {
  const theme = useTheme();
  if (!theme) return null;
  const { toggleTheme } = theme;

  return (
    <div className="bg-secondary drop-shadow-sm shadow-gray-500">
      <Container className="p-2">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src="./logo.png" alt="logo" className="h-10" />
          </Link>
          <ul className="flex items-center space-x-4">
            <li>
              <button onClick={toggleTheme} className="bg-dark-subtle p-1 rounded">
                <BsFillSunFill className="text-secondary" size={24} />
              </button>
            </li>
            <li>
              <input
                type="text"
                className="border-2 border-dark-subtle p-1 bg-transparent text-xl outline-none focus:border-white transition text-white"
                placeholder="search..."
              />
            </li>
            <li>
              <Link className="text-white font-semibold text-lg" to={PathsNames.AUTH_SIGN_IN}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
