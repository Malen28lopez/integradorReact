import React from 'react';
import { useParams } from 'react-router-dom';
import citiesData from './citiesData'; // Asegúrate de la ruta correcta
import Comments from '../Components/Comment/Comments';

function CityDetailsPage() {
  const { city } = useParams();
  const cityData = citiesData[city];

  if (!cityData) {
    return <p>Ciudad no encontrada</p>;
  }

  return (
    <div className="bg-gray-100 p-6 m-4 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4 text-blue-600">{cityData.name}</h2>
      <img src={cityData.image} alt={cityData.name} className="w-full h-64 object-cover mb-4" />
      <p className="text-gray-700 mb-6">{cityData.details}</p>
      <h3 className="text-2xl font-semibold mb-2">Puntos de Interés</h3>
      <ul className="list-disc pl-5">
        {cityData.pointsOfInterest.map((point, index) => (
          <li key={index} className="text-gray-700">{point}</li>
        ))}
      </ul>
      <Comments city={cityData.name} />
    </div>
  );
}

export default CityDetailsPage;
