import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BoardEdit = () => {
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
      .catch(error => console.error('Error:', error));
  }, [no]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBoard = { no, title, content, author };

    fetch('http://localhost:8085/company/boards/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBoard),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        navigate(`/board-detail/${no}`);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Edit Board</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default BoardEdit;