import React from 'react';
import CityItem from './CityItem';
import { Link } from 'react-router-dom';


function CityList() {
  return (
    <div> Lista de ciudades
      {cities.map((city, index) => (
        <Link to="/city" className="text-blue-500 hover:underline" key={index}>
          <CityItem name={city.name} image={city.image} description={city.description} pointsOfInterest={city.pointsOfInterest} />
        </Link>
      ))}
    </div>
  );
}

export default CityList;
