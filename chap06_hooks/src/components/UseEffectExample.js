// src/components/UseEffectExample.js
import React, { useState, useEffect } from 'react';

function UseEffectExample() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component mounted or updated');
        document.title = `Count: ${count}`;

        return () => {
            console.log('Cleanup on component unmount or before next update');
        };
    }, [count]); // Dependency array - effect runs when 'count' changes

    return (
        <div>
            <h2>useEffect Example</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default UseEffectExample;