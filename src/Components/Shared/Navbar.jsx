import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-extrabold text-2xl tracking-wide hover:text-gray-200 transition-colors duration-300">
          Inicio
        </Link>
        <div className="space-x-6">
          <Link to="/about" className="text-white text-lg hover:text-gray-200 transition-colors duration-300">
            Sobre Nosotros
          </Link>
          <Link to="/comment" className="text-white text-lg hover:text-gray-200 transition-colors duration-300">
            Comentarios
          </Link>          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
