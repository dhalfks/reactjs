import React from 'react';

function MyComponent({ name, age, email }) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default MyComponent;