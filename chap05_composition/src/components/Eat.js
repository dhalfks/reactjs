import React from 'react';

function Eat() {
    const eats = [
        { id: 1, brand: 'Samyang' },
        { id: 2, brand: 'Nongsim' },
        { id: 3, brand: 'Otugi' }
    ];
    return (
        <>
            <h1>What do you eat?</h1>
            <ul>
                {eats.map((eat) => <Eat key={eat.id} brand={eat.brand} />)}
            </ul>
        </>
    );
}

export default Eat;