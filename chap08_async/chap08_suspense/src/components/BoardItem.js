import React from 'react';

function BoardItem({ board }) {
    return (
        <div>
            <h3>{board.title}</h3>
            <p>{board.content}</p>
            <p>Author: {board.author}</p>
            <p>Date: {new Date(board.resdate).toLocaleDateString()}</p>
            <p>Hits: {board.hits}</p>
        </div>
    );
}

export default BoardItem;