import React from 'react';
import MadePass from './MadePass';
import MissedPass from  './MissedPass';

function Passing(props) {
    const isPass = props.isPass;
    return (
        <>
            { isPass ? <MadePass /> : <MissedPass /> }
        </>
    );
}

export default Passing;