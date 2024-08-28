import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

function BoardList() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    $.ajax({
      url: 'http://localhost:8085/company/boards/list',
      type: 'GET',
      success: (data) => {
        setBoards(data);
      },
      error: (err) => {
        console.error('Error fetching board list', err);
      },
    });
  }, []);

  return (
    <div>
      <h1>Board List</h1>
      <ul>
        {boards.map((board) => (
          <li key={board.no}>
            <Link to={`/boards/detail/${board.no}`}>{board.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BoardList;