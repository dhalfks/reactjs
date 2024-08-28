import React from 'react';

function MyComponent2({ name, age, ...rest }) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Other props: {JSON.stringify(rest)}</p>
        </div>
    );
}

export default MyComponent2;