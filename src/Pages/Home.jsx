import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Continent from '../Components/Area/Zone/Continent';
import { Routes, Route, Link } from 'react-router-dom';
import BackgroundMusic from '../Components/Shared/BackgroundMusic';
import BackgroundSlideshow from '../Components/Shared/BackgroundSlideShow';

function Home() {
  return (
    <BackgroundSlideshow> {/* Aquí envolvemos el contenido dentro del componente */}
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-bold mb-4 text-white">Selecciona un lugar</h1> {/* Añadido text-white */}
          <Continent />
        </main>
        <footer>      
            <Footer />     
        </footer>
      </div>
    </BackgroundSlideshow>
  );
}

export default Home;
