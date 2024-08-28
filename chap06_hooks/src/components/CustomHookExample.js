// src/components/CustomHookExample.js
import React, { useState } from 'react';

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = (value) => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
}

function CustomHookExample() {
    const [name, setName] = useLocalStorage('name', '');

    return (
        <div>
            <h2>Custom Hook Example</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <p>Your name is: {name}</p>
        </div>
    );
}

export default CustomHookExample;