import React from 'react';
import { Link } from 'react-router-dom';

function CommentList({ comments = [] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      {comments.length === 0 ? (
        <p className="text-gray-700">No hay comentarios aún</p>
      ) : (
        comments.map((comment, index) => (
          <div key={index} className="border-b border-gray-200 py-2">
            <Link to={`/city-details/${comment.city}`} className="text-blue-500 hover:underline">
              {comment.text}
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default CommentList;
