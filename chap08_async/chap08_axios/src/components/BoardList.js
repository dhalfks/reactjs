import React, { useState, useEffect } from 'react';
import axios from '../axios';

const BoardList = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios.get('/list')
      .then(response => setBoards(response.data))
      .catch(error => console.error('Error fetching boards:', error));
  }, []);

  return (
    <div>
      <h1>Board List</h1>
      <ul>
        {boards.map(board => (
          <li key={board.no}>
            <a href={`/board/${board.no}`}>{board.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardList;