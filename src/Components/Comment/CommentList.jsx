import React from 'react';
import { Link } from 'react-router-dom';

function CommentList({ comments = [] }) {
  return (
    <div className="flex flex-wrap justify-between">
      {comments.length === 0 ? (
        <p className="text-gray-700">No hay comentarios aún</p>
      ) : (
        comments.map((comment, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {comment.city}
            </h3>
            <p className="text-gray-700">{comment.text}</p>
            <Link to={`/city-details/${comment.city}`} className="text-blue-500 hover:underline mt-2 block">
              Ver ciudad
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default CommentList;

