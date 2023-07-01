import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = ({ title, showBackButton }) => {
  const handleBackButtonClick = () => {
    // Handle back button click
  };

  return (
    <header className="flex items-center justify-between py-2 px-6 bg-custom-pink text-white">
    {showBackButton ? (
      <Link to="/" className="flex items-center text-white hover:text-gray-300 focus:outline-none">
        <FontAwesomeIcon icon={faAngleLeft} className="mr-2" />
      </Link>
    ) : (
      <h1 className="text-pink-500">.</h1>
    )}
      <h1 className="text-sm font-thin sm:text-xl sm:font-bold text-white">{title}</h1>
      <div className="flex space-x-4">
        <button className="text-white hover:text-gray-300 focus:outline-none">
          <FontAwesomeIcon icon={faMicrophone} />
        </button>
        <button className="text-white hover:text-gray-300 focus:outline-none">
          <FontAwesomeIcon icon={faCog} />
        </button>
      </div>
    </header>
  );
};

export default Header;
