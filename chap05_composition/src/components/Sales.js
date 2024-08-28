import React from 'react';
import Tv from './Tv';

function Sales() {
    const tvInfo = { name: "Samsung", model: "OLED SD95" };
    return (
        <>
            <h1>What product do you want to buy?</h1>
            <Tv brand={tvInfo} />
        </>
    );
}

export default Sales;