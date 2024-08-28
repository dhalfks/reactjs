import React from 'react';

function Boarding(props) {
    const cars = props.cars;
    return (
        <>
            <h1>Boarding</h1>
            {cars.length > 0 &&
                <h2>You have {cars.length} cars in your boarding.</h2>
            }
        </>
    );
}

export default Boarding;