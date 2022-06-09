import React, { useReducer } from 'react'

const initialState = {
    firstReducer: 5,
    secondReducer: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstReducer: state.firstReducer + action.value }
        case 'decrement':
            return { ...state, firstReducer: state.firstReducer - action.value }
        case 'increment2':
            return { ...state, secondReducer: state.secondReducer + action.value }
        case 'decrement2':
            return { ...state, secondReducer: state.secondReducer - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

const SecondReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h4>First Counter={count.firstReducer}</h4>
            <button className='mx-3' onClick={() => dispatch({ type: 'increment', value: 2 })}>Increment 2</button>
            <button className='mx-3' onClick={() => dispatch({ type: 'decrement', value: 3 })}>Decrement 3</button>

            <button className='mx-3' onClick={() => dispatch({ type: 'increment', value: 15 })}>Increment 15</button>
            <button className='mx-3' onClick={() => dispatch({ type: 'decrement', value: 15 })}>decrement 15</button>

            <button className='mx-3' onClick={() => dispatch({ type: 'reset' })}>Reset</button>

            <div>
                <h4>Second Counter={count.secondReducer}</h4>
                <button className='mx-3' onClick={() => dispatch({ type: 'increment2', value: 10 })}>Increment 10</button>
                <button className='mx-3' onClick={() => dispatch({ type: 'decrement2', value: 10 })}>Decrement 10</button>
            </div>
        </div>

    )
}

export default SecondReducer