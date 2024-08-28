import React from 'react';
import Food from './Food';

function Buy() {
    const foods = ['Samyang', 'Nongsim', 'Otugi'];
    return (
        <>
            <h1>What do you eat?</h1>
            <ul>
                {foods.map((food) => <Food key={food} brand={food} />)}
            </ul>
        </>
    );
}

export default Buy;