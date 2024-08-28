import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BoardInsert() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8085/company/boards/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, author }),
    })
      .then(response => response.json())
      .then(() => {
        navigate('/boards');
      })
      .catch(error => console.error('Error inserting board:', error));
  };

  return (
    <div>
      <h1>Insert New Board</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <br />
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Board</button>
      </form>
    </div>
  );
}

export default BoardInsert;