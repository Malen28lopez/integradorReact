import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="bg-gray-900 bg-opacity-90 text-white text-center p-6 border-t-4 border-blue-500 font-medium shadow-md mt-8">
      <div className="flex justify-center space-x-12">
        <div>
          <p className="font-semibold text-lg">Pablo Peralta</p>
          <div className="flex justify-center space-x-6 mt-2">
            <a href="https://github.com/pabloperalta" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/pabloperalta" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
        <div>
          <p className="font-semibold text-lg">Malena Lopez</p>
          <div className="flex justify-center space-x-6 mt-2">
            <a href="https://github.com/malenalopez" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/malenalopez" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
