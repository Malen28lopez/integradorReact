import React, { useState, useEffect } from 'react';
import citiesData from '../../Pages/citiesData';

function BackgroundSlideshow({ children }) {
  const cityNames = Object.keys(citiesData);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cityNames.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval);
  }, [cityNames.length]);

  const currentCity = citiesData[cityNames[currentCityIndex]];

  return (
    <div
      style={{
        width: '100%',
        height: '60%',
        backgroundImage: `url(${currentCity.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children} {/* Renderiza el contenido pasado como children */}
    </div>
  );
}

export default BackgroundSlideshow;
