import React from 'react';

function Footer() {
  return (
    <div className="bg-black bg-opacity-60 text-white text-center p-4 border-t-4 border-blue-500 font-medium shadow-md mt-8">
      <p className="text-lg mb-4">Sobre Nosotros</p>
      <div className="flex justify-center space-x-8">
        <div>
          <p className="font-semibold">Pablo Peralta</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/pabloperalta" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/pabloperalta" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <p className="font-semibold">Malena Lopez</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/malenalopez" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/malenalopez" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
