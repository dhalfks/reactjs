import React, { useState } from 'react';

const Counter = () => {
    // useState 훅을 사용하여 count 상태와 setCount 상태 업데이트 함수를 정의
    const [count, setCount] = useState(10);

    // 카운트를 증가시키는 함수
    const incrementCount = () => {
        setCount(count + 1);
    };

    // 컴포넌트의 UI를 정의
    return (
        <div>
            <h1>Current Count: {count}</h1>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
};

export default Counter;