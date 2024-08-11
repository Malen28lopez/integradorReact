import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg">
          Home
        </Link>
        <div className="space-x-4">
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/comment" className="text-white">
            Comments
          </Link>
          <Link to="/city" className="text-white">
            City Details
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
