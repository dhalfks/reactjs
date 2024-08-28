// src/components/UseRefExample.js
import React, { useRef } from 'react';

function UseRefExample() {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <h2>useRef Example</h2>
            <input ref={inputRef} type="text" placeholder="Click button to focus" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}

export default UseRefExample;