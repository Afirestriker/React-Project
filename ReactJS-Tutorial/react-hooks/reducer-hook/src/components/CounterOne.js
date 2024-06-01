// useReducer simple state and action

import React, { useReducer } from 'react';

const initialValue = 0;

const reducer = (state, action) => {
    switch(action) {
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
        case 'reset': return initialValue;
        default: return state;
    }
};

const CounterOne = () => {
    const [count, dispatch] = useReducer(reducer, initialValue);

    console.log("CounterOne Rendered")

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    );
}

export default CounterOne;
