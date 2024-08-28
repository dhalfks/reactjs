import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BoardList() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8085/company/boards/list')
      .then(response => response.json())
      .then(data => setBoards(data))
      .catch(error => console.error('Error fetching boards:', error));
  }, []);

  return (
    <div>
      <h1>Board List</h1>
      <ul>
        {boards.map(board => (
          <li key={board.no}>
            <Link to={`/boards/detail/${board.no}`}>{board.title}</Link>
            <Link to={`/boards/edit/${board.no}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BoardList;