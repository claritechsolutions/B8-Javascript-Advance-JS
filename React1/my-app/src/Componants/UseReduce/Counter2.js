import React, { useReducer } from 'react';
const initialState = {
    firstCounter:0,
    secondCounter:10
}
const reducer = (state, action) => {
    switch (action.type) {
        case'increament':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case'decreament':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState;
        default:
            return state;
    }

}

const Counter2 = () => {
    const [counter, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>
                <h2>{counter.firstCounter}</h2>
                <button onClick={() => dispatch({ type: 'increament', value: 2 })}>IncreamentBy2</button>
                <button onClick={() => dispatch({ type: 'decreament', value: 1 })}>DecreamentBy1</button>
                <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            </div>
            <div>
                <h2>{counter.secondCounter}</h2>
                <button onClick={() => dispatch({ type: 'increment2', value: 10 })}>IncrementBy10</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 10 })}>DecrementBy10</button>
            </div>

        </div>
    )
}

export default Counter2
