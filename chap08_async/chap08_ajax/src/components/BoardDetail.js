import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { useParams, Link } from 'react-router-dom';

function BoardDetail() {
  const [board, setBoard] = useState(null);
  const { no } = useParams();

  useEffect(() => {
    $.ajax({
      url: `http://localhost:8085/company/boards/detail?no=${no}`,
      type: 'GET',
      success: (data) => {
        setBoard(data);
      },
      error: (err) => {
        console.error('Error fetching board detail', err);
      },
    });
  }, [no]);

  const handleDelete = () => {
    $.ajax({
      url: `http://localhost:8085/company/boards/delete`,
      type: 'DELETE',
      contentType: 'application/json',
      data: JSON.stringify({ no }),
      success: () => {
        alert('Board deleted successfully');
        window.location.href = '/boards';
      },
      error: (err) => {
        console.error('Error deleting board', err);
      },
    });
  };

  if (!board) return <div>Loading...</div>;

  return (
    <div>
      <h1>Board Detail</h1>
      <p>Title: {board.title}</p>
      <p>Content: {board.content}</p>
      <p>Author: {board.author}</p>
      <p>Resdate: {board.resdate}</p>
      <button onClick={handleDelete}>Delete Board</button>
      <Link to={`/boards/edit/${board.no}`}>Edit Board</Link>
      <Link to="/boards">Back to List</Link>
    </div>
  );
}

export default BoardDetail;