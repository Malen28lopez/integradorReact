import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

function Comments({ city }) {
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem('comments');
    return savedComments ? JSON.parse(savedComments) : [];
  });

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const addComment = (comment) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  // Filtra los comentarios por la ciudad actual
  const cityComments = comments.filter(comment => comment.city === city);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg mt-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Comentarios sobre {city}</h2>
      <CommentForm addComment={addComment} city={city} />
      <CommentList comments={cityComments} />
    </div>
  );
}

export default Comments;
