import React, { useState } from 'react';
import axios from '../axios';

const BoardInsert = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/insert', { title, content, author })
      .then(response => {
        alert('Board inserted successfully');
      })
      .catch(error => {
        console.error('Error inserting board:', error);
      });
  };

  return (
    <div>
      <h1>Insert New Board</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BoardInsert;