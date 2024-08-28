import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BoardList = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8085/company/boards/list')
      .then(response => response.json())
      .then(data => setBoards(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Board List</h1>
      <ul>
        {boards.map(board => (
          <li key={board.no}>
            <Link to={`/board-detail/${board.no}`}>{board.title}</Link>
            <Link to={`/board-edit/${board.no}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardList