import React from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../Components/Comment/CommentList';
import CommentForm from '../Components/Comment/CommentForm';

function CityDetails({ comments, addComment }) {
  const { city } = useParams();
  const cityComments = comments.filter(comment => comment.city === city);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Detalles de {city}</h2>
      <p className="text-gray-700">Aquí puedes añadir información detallada sobre la ciudad.</p>
      
      {/* Mostrar el formulario de comentarios */}
      <CommentForm addComment={(comment) => addComment({ ...comment, city })} />

      {/* Mostrar la lista de comentarios de la ciudad */}
      <CommentList comments={cityComments} />
    </div>
  );
}

export default CityDetails;
