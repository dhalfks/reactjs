import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { useParams } from 'react-router-dom';

const BoardDetail = () => {
  const [board, setBoard] = useState(null);
  const { no } = useParams();

  useEffect(() => {
    axios.get(`/detail?no=${no}`)
      .then(response => setBoard(response.data))
      .catch(error => console.error('Error fetching board detail:', error));
  }, [no]);

  if (!board) return <div>Loading...</div>;

  return (
    <div>
      <h1>{board.title}</h1>
      <p>{board.content}</p>
      <p><strong>Author:</strong> {board.author}</p>
      <p><strong>Date:</strong> {new Date(board.resdate).toLocaleString()}</p>
    </div>
  );
};

export default BoardDetail;