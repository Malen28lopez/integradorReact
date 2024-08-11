import React, { useState } from 'react';
import Country from '../Country/Country';
import '../../../App.css'


function Continent() {
  const continents = [
    {
      name: 'África',
      countries: ['Nigeria', 'Egipto', 'Sudáfrica', 'Marruecos'],
    },
    {
      name: 'América del Norte',
      countries: ['Estados Unidos', 'Canadá', 'México', 'Cuba'],
    },
    {
      name: 'América del Sur',
      countries: ['Brasil', 'Argentina', 'Chile', 'Perú'],
    },
    {
      name: 'América Central',
      countries: ['Costa Rica', 'Panamá', 'Guatemala', 'Honduras'],
    },
    {
      name: 'Asia',
      countries: ['China', 'Japón', 'India', 'Tailandia'],
    },
    {
      name: 'Europa',
      countries: ['Francia', 'Italia', 'España', 'Reino Unido'],
    },
    {
      name: 'Oceanía',
      countries: ['Australia', 'Nueva Zelanda', 'Fiyi', 'Papúa Nueva Guinea'],
    },
  ];


  const [selectedContinent, setSelectedContinent] = useState(null);

  const handleContinentClick = (continent) => {
    setSelectedContinent(continent);
  };

  const handleBackClick = () => {
    setSelectedContinent(null);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center space-x-4">
        {!selectedContinent ? (
          continents.map((continent, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl tarjeta-mapa hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:scale-105 hover:bg-gradient-to-l hover:from-blue-700 hover:to-blue-500"
              onClick={() => handleContinentClick(continent)}
            >
              <h2 className="text-2xl font-bold mb-2">{continent.name}</h2>
              <p className="text-white-700">Explora {continent.name}</p>
            </div>
          ))
        ) : (
          <div>
            <button 
              className="bg-blue-500 text-white p-2 rounded mb-4"
              onClick={handleBackClick}
            >
              Atrás
            </button>
            <Country continent={selectedContinent} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Continent;