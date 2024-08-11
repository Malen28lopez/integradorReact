import React, { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/AboutPage';
import CommentsPage from './Pages/CommentsPage';
import CityDetailsPage from './Pages/CityDetailsPage';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';
import BackgroundMusic from './Components/Shared/BackgroundMusic';

function App() {
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem('comments');
    return savedComments ? JSON.parse(savedComments) : [];
  });

  const [hasStarted, setHasStarted] = useState(false);

  const addComment = (comment) => {
    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  const handleStart = () => {
    setHasStarted(true);
  };

  return (
    <>
      {!hasStarted ? (
        <div className="start-screen flex items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-blue-400">
          <button 
            onClick={handleStart} 
            className="text-white font-extrabold text-2xl tracking-wide bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg shadow-lg transition-all duration-300"
          >
            Comenzar a explorar
          </button>
        </div>
      ) : (
        <>
          <Navbar />
          <BackgroundMusic />          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/comment" element={<CommentsPage comments={comments} />} />
            <Route path="/city-details/:city" element={<CityDetailsPage comments={comments} addComment={addComment} />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
