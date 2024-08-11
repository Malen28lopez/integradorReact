import React, { useState, useEffect } from 'react';
import CommentList from '../Components/Comment/CommentList';

function CommentsPage() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Cargar los comentarios desde localStorage
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg mt-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Todos los Comentarios</h2>
      <CommentList comments={comments} />
    </div>
  );
}

export default CommentsPage;
