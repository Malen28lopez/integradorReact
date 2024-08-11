import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function StartScreen() {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const handleStart = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().then(() => {
        navigate('/home');
      }).catch((error) => {
        console.error("Error al reproducir la música:", error);
      });
    } else {
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Bienvenido</h1>
      <button
        onClick={handleStart}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
      >
        Comenzar a explorar
      </button>
      <audio ref={audioRef} src="src/assets/musica-Rameses-B-Bae-Bae-1.mp3" loop volume="0.1" />
    </div>
  );
}

export default StartScreen;
