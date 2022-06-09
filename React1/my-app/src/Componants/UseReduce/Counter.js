import React, { useReducer } from 'react'
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increament':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state;

    }

}


const Counter = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h2> {count}</h2>

            <button onClick={() => dispatch('increament')}>increament</button>
            <button onClick={() => dispatch('decrement')}>decreament</button>
            <button onClick={() => dispatch('reset')}>reset</button>

        </div>
    )
}

export default Counter;