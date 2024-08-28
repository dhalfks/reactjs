import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li><Link to="/boards">Board List</Link></li>
          <li><Link to="/boards/insert">Add Board</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;