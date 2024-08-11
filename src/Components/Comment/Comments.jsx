import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

function Comments() {
  // Inicializar el estado con los comentarios almacenados en localStorage, si existen
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem('comments');
    return savedComments ? JSON.parse(savedComments) : [];
  });

  // Guardar los comentarios en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const addComment = (comment) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg mt-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Comentarios</h2>
      <CommentForm addComment={addComment} />
      <CommentList comments={comments} />
    </div>
  );
}

export default Comments;
