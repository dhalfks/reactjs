import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function BoardDetail() {
  const { no } = useParams();
  const [board, setBoard] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8085/company/boards/detail?no=${no}`)
      .then(response => response.json())
      .then(data => setBoard(data))
      .catch(error => console.error('Error fetching board detail:', error));
  }, [no]);

  if (!board) return <p>Loading...</p>;

  return (
    <div>
      <h1>{board.title}</h1>
      <p>{board.content}</p>
      <p><strong>Author:</strong> {board.author}</p>
      <p><strong>Posted on:</strong> {new Date(board.resdate).toLocaleDateString()}</p>
      <Link to={`/boards/edit/${board.no}`}>Edit</Link>
    </div>
  );
}

export default BoardDetail;