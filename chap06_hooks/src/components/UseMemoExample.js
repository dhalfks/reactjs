// src/components/UseMemoExample.js
import React, { useState, useMemo } from 'react';

function computeExpensiveValue(num) {
    console.log('Computing expensive value');
    return num * 2;
}

function UseMemoExample() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(1);

    const expensiveValue = useMemo(() => computeExpensiveValue(num), [num]);

    return (
        <div>
            <h2>useMemo Example</h2>
            <p>Expensive Value: {expensiveValue}</p>
            <button onClick={() => setNum(num + 1)}>Increment Number</button>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    );
}

export default UseMemoExample;