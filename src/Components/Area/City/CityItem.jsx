import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css'

function City({ country }) {
  const cities = {
    Nigeria: ['Lagos', 'Abuja', 'Ibadan'],
    Egipto: ['El Cairo', 'Alejandría', 'Giza'],
    Sudáfrica: ['Ciudad del Cabo', 'Johannesburgo', 'Durban'],
    Marruecos: ['Marrakech', 'Casablanca', 'Fez'],
  
    'Estados Unidos': ['Nueva York', 'Los Ángeles', 'Las Vegas'],
    Canadá: ['Toronto', 'Vancouver', 'Montreal'],
    México: ['Ciudad de México', 'Cancún', 'Guadalajara'],
    Cuba: ['La Habana', 'Varadero', 'Santiago de Cuba'],
  
    Brasil: ['Río de Janeiro', 'São Paulo', 'Salvador'],
    Argentina: ['Buenos Aires', 'Córdoba', 'Mendoza'],
    Chile: ['Santiago', 'Valparaíso', 'San Pedro de Atacama'],
    Perú: ['Lima', 'Cusco', 'Arequipa'],
  
    'Costa Rica': ['San José', 'Puerto Limón', 'Monteverde'],
    Panamá: ['Ciudad de Panamá', 'Bocas del Toro', 'Boquete'],
    Guatemala: ['Ciudad de Guatemala', 'Antigua Guatemala', 'Tikal'],
    Honduras: ['Tegucigalpa', 'Roatán', 'San Pedro Sula'],
  
    China: ['Pekín', 'Shanghái', 'Xi\'an'],
    Japón: ['Tokio', 'Kioto', 'Osaka'],
    India: ['Delhi', 'Mumbai', 'Agra'],
    Tailandia: ['Bangkok', 'Chiang Mai', 'Phuket'],
  
    Francia: ['París', 'Niza', 'Lyon'],
    Italia: ['Roma', 'Venecia', 'Florencia'],
    España: ['Barcelona', 'Madrid', 'Sevilla'],
    'Reino Unido': ['Londres', 'Edimburgo', 'Manchester'],
  
    Australia: ['Sídney', 'Melbourne', 'Brisbane'],
    'Nueva Zelanda': ['Auckland', 'Wellington', 'Queenstown'],
    Fiyi: ['Suva', 'Nadi', 'Savusavu'],
    'Papúa Nueva Guinea': ['Port Moresby', 'Lae', 'Mount Hagen'],
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      {cities[country].map((city, index) => (
        <Link
          key={index}
          to={`/city-details/${city}`}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl tarjeta-mapa hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:scale-105 hover:bg-gradient-to-l hover:from-blue-700 hover:to-blue-500"
        >
          <h2 className="text-2xl font-bold mb-2">{city}</h2>
          <p className="text-gray-700">Descubre {city}</p>
        </Link>
      ))}
    </div>
  );
}

export default City;
