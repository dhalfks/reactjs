import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/boards">View Boards</Link>
        <Link to="/boards/insert">Add New Board</Link>
      </nav>
    </div>
  );
}

export default Home;