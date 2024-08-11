import React from 'react';

function CommentList({ comments = [] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      {comments.length === 0 ? (
        <p className="text-gray-700">No hay comentarios aún</p>
      ) : (
        comments.map((comment, index) => (
          <div key={index} className="border-b border-gray-200 py-2">
            {comment}
          </div>
        ))
      )}
    </div>
  );
}

export default CommentList;
