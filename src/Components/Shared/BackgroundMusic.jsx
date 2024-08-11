import React, { useEffect, useRef } from 'react';

function BackgroundMusic() {
    
    const audioRef = useRef(null);

    useEffect(() => {
      const audio = audioRef.current;
      audio.volume = 0.1; 
      audio.loop = true; 
      audio.play();
  
      return () => {
        audio.pause();
      };
    }, []);
  
    return (
      <audio ref={audioRef} src="src\assets\musica-Rameses-B-Bae-Bae-1.mp3" />
    );
  };
  
  export default BackgroundMusic; 