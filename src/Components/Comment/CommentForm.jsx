import React, { useState } from 'react';

function CommentForm({ addComment }) {
  const [comment, setComment] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() && city.trim()) {
      addComment({ text: comment, city }); // Añadir ciudad al comentario
      setComment('');
      setCity(''); // Resetear el estado
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto mt-6">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Escribe un comentario"
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        rows="4"
      />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Nombre de la ciudad"
        className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Agregar comentario
      </button>
    </form>
  );
}

export default CommentForm;
