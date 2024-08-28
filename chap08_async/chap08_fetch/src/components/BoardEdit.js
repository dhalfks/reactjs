import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function BoardEdit() {
  const { no } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8085/company/boards/detail?no=${no}`)
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        setContent(data.content);
        setAuthor(data.author);
      })
      .catch(error => console.error('Error fetching board detail for edit:', error));
  }, [no]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8085/company/boards/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ no, title, content, author }),
    })
      .then(response => response.json())
      .then(() => {
        navigate('/boards');
      })
      .catch(error => console.error('Error updating board:', error));
  };

  return (
    <div>
      <h1>Edit Board</h1>
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
        <button type="submit">Update Board</button>
      </form>
    </div>
  );
}

export default BoardEdit;