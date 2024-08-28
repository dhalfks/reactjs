import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li><Link to="/board-list">Board List</Link></li>
          <li><Link to="/board-insert">Add New Board</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;