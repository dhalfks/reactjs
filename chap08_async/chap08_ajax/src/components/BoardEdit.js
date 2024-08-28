import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { Link, useParams, useNavigate } from 'react-router-dom';

function BoardEdit() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const { no } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    $.ajax({
      url: `http://localhost:8085/company/boards/detail?no=${no}`,
      type: 'GET',
      success: (data) => {
        setTitle(data.title);
        setContent(data.content);
        setAuthor(data.author);
      },
      error: (err) => {
        console.error('Error fetching board details', err);
      },
    });
  }, [no]);

  const handleSubmit = (e) => {
    e.preventDefault();
    $.ajax({
      url: 'http://localhost:8085/company/boards/update',
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify({ no, title, content, author }),
      success: () => {
        alert('Board updated successfully');
        navigate(`/boards/detail/${no}`);
      },
      error: (err) => {
        console.error('Error updating board', err);
      },
    });
  };

  return (
    <div>
      <h1>Edit Board</h1>
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
        <button type="submit">Update Board</button>
      </form>
      <Link to={`/boards/detail/${no}`}>Back to Detail</Link>
    </div>
  );
}

export default BoardEdit;