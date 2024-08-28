import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { useParams, useNavigate } from 'react-router-dom';

const BoardEdit = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const { no } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/detail?no=${no}`)
      .then(response => {
        setTitle(response.data.title);
        setContent(response.data.content);
        setAuthor(response.data.author);
      })
      .catch(error => console.error('Error fetching board detail:', error));
  }, [no]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put('/update', { no, title, content, author })
      .then(response => {
        alert('Board updated successfully');
        navigate(`/board/${no}`);
      })
      .catch(error => {
        console.error('Error updating board:', error);
      });
  };

  return (
    <div>
      <h1>Edit Board</h1>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default BoardEdit;