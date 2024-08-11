import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Continent from '../Components/Area/Zone/Continent'

import { Routes, Route, Link } from 'react-router-dom';
import BackgroundMusic from '../Components/Shared/BackgroundMusic';

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundMusic />
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-4">Comienza a explorar</h1>
        <Continent />
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <Link to="/About" className="text-white hover:underline">
          <Footer />
        </Link>
      </footer>
    </div>
  );
}

export default Home;