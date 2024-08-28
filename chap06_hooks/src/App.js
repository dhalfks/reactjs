// src/App.js
import React from 'react';
import UseStateExample from './components/UseStateExample';
import UseEffectExample from './components/UseEffectExample';
import UseContextExample from './components/UseContextExample';
import UseRefExample from './components/UseRefExample';
import UseCallbackExample from './components/UseCallbackExample';
import UseMemoExample from './components/UseMemoExample';
import CustomHookExample from './components/CustomHookExample';

function App() {
    return (
        <div>
            <h1>React Hooks Examples</h1>
            <UseStateExample />
            <UseEffectExample />
            <UseContextExample />
            <UseRefExample />
            <UseCallbackExample />
            <UseMemoExample />
            <CustomHookExample />
        </div>
    );
}

export default App;
