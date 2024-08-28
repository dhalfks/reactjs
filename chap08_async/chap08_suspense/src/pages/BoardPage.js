import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BoardForm from '../components/BoardForm';
import { getBoardById } from '../api/boardApi';
import { useQuery } from 'react-query';

function BoardPage() {
    const { id } = useParams();
    const { data: board, error, isLoading } = useQuery(['board', id], () => getBoardById(id), {
        enabled: !!id
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>{id ? 'Edit Board' : 'Create Board'}</h1>
            <BoardForm board={board?.data} />
        </div>
    );
}

export default BoardPage;