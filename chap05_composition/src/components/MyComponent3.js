import React from 'react';

function MyComponent3({ user: { age } }) {
    return (
        <div>
            <p>Age: {age}</p>
        </div>
    );
}

export default MyComponent3;