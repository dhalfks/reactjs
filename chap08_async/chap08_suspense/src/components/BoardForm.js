import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { createBoard, updateBoard } from '../api/boardApi';

function BoardForm({ board }) {
    const [title, setTitle] = useState(board ? board.title : '');
    const [content, setContent] = useState(board ? board.content : '');
    const [author, setAuthor] = useState(board ? board.author : '');
    const queryClient = useQueryClient();
    
    const mutation = useMutation(board ? 
        () => updateBoard(board.no, { title, content, author }) :
        () => createBoard({ title, content, author }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('boards');
            }
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                Content:
                <textarea value={content} onChange={(e) => setContent(e.target.value)} />
            </label>
            <label>
                Author:
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </label>
            <button type="submit">{board ? 'Update' : 'Create'}</button>
        </form>
    );
}

export default BoardForm;