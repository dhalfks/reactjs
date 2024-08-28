// src/components/UseCallbackExample.js
import React, { useState, useCallback } from 'react';

const Child = React.memo(({ onButtonClick }) => {
    console.log('Child rendered');
    return <button onClick={onButtonClick}>Click me</button>;
});

function UseCallbackExample() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        alert('Button clicked');
    }, []); // Empty dependency array means this function will not change

    return (
        <div>
            <h2>useCallback Example</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <Child onButtonClick={handleClick} />
        </div>
    );
}

export default UseCallbackExample;