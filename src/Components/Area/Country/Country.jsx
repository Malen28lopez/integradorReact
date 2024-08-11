import React, { useState } from 'react';
import CityItem from '../City/CityItem';
import '../../../App.css'

function Country({ continent }) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      {!selectedCountry ? (
        continent.countries.map((country, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg tarjeta-mapa shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => handleCountryClick(country)}
          >
            <h2 className="text-2xl font-bold mb-2">{country}</h2>
            <p className="text-gray-700">Descubre {country}</p>
          </div>
        ))
      ) : (
        <CityItem country={selectedCountry} />
      )}
    </div>
  );
}

export default Country;
