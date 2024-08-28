import React from 'react';
import { useQuery } from 'react-query';
import { getBoards } from '../api/boardApi';
import BoardItem from './BoardItem';

function BoardList() {
    const { data, error, isLoading } = useQuery('boards', getBoards);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h2>Board List</h2>
            {data?.data.map(board => (
                <BoardItem key={board.no} board={board} />
            ))}
        </div>
    );
}

export default BoardList;