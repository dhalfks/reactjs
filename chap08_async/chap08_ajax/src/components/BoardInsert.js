import React, { useState } from 'react';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';

function BoardInsert() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    $.ajax({
      url: 'http://localhost:8085/company/boards/insert',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ title, content, author }),
      success: () => {
        alert('Board added successfully');
        navigate('/boards');
      },
      error: (err) => {
        console.error('Error inserting board', err);
      },
    });
  };

  return (
    <div>
      <h1>Add Board</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <button type="submit">Add Board</button>
      </form>
    </div>
  );
}

export default BoardInsert;