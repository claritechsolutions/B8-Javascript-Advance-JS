import React, { Reducer, useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

const FirstReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h4>Count={count}</h4>
            <button className='mx-3' onClick={() => dispatch('increment')}>Increment</button>
            <button className='mx-3' onClick={() => dispatch('decrement')}>Decrement</button>
            <button className='mx-3' onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default FirstReducer