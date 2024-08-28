import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName } from '../actions/userActions';

function User() {
  const name = useSelector(state => state.user.name);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={() => dispatch(setName('Alice'))}>Set Name to Alice</button>
      <button onClick={() => dispatch(setName('Bob'))}>Set Name to Bob</button>
    </div>
  );
}

export default User;