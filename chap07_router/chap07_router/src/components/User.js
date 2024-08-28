import React from 'react';
import { useParams, Outlet } from 'react-router-dom';

function User() {
  const { userId } = useParams();

  return (
    <div>
      <h1>User Page: {userId}</h1>
      <Outlet /> {/* Nested routes will be rendered here */}
    </div>
  );
}

export default User;