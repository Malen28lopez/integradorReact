import React, { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/AboutPage';
import CommentsPage from './Pages/CommentsPage';
import CityDetailsPage from './Pages/CityDetailsPage';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';

function App() {
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem('comments');
    return savedComments ? JSON.parse(savedComments) : [];
  });

  const addComment = (comment) => {
    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/comment" element={<CommentsPage comments={comments} />} />
        <Route path="/city-details/:city" element={<CityDetailsPage comments={comments} addComment={addComment} />} />
      </Routes>
    </>
  );
}

export default App;
