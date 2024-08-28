import React from 'react';
import Airplane from './Airplane';

function UsingAir() {
    const comName = "Asiana";
    return (
        <>
            <h1>Which airline do you fly?</h1>
            <Airplane brand={comName} />
        </>
    );
}

export default UsingAir;