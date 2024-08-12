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
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg mt-6 mx-auto max-w-7xl">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Todos los Comentarios</h2>
      <div className="flex flex-wrap justify-between">
        <CommentList comments={comments} />
      </div>
    </div>
  );
}

export default CommentsPage;
