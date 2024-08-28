import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const BoardDetail = () => {
  const { no } = useParams();
  const [board, setBoard] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8085/company/boards/detail?no=${no}`)
      .then(response => response.json())
      .then(data => setBoard(data))
      .catch(error => console.error('Error:', error));
  }, [no]);

  if (!board) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Board Detail</h1>
      <p><strong>Title:</strong> {board.title}</p>
      <p><strong>Content:</strong> {board.content}</p>
      <p><strong>Author:</strong> {board.author}</p>
      <p><strong>Posted on:</strong> {new Date(board.resdate).toLocaleDateString()}</p>
      <Link to={`/board-edit/${board.no}`}>Edit</Link>
      <button onClick={() => handleDelete(board.no)}>Delete</button>
      <br />
      <Link to="/board-list">Back to List</Link>
    </div>
  );
  
  function handleDelete(no) {
    fetch(`http://localhost:8085/company/boards/delete?no=${no}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        console.log('Board deleted');
        window.location.href = '/board-list';
      })
      .catch(error => console.error('Error:', error));
  }
};

export default BoardDetail;