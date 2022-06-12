import React, { useReducer } from 'react';
const initialState = {
    fname: ''

}
const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return { name: action.value };
        case 'SUBMIT':
            return {...initialState };

        default:
            return state;

    }
}

const Form = () => {
    const [nameState, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <form>
                <label><b>FirstName:</b></label>
                <input type='text' value={nameState.fname} onChange={e => dispatch({type: 'CHANGE',...nameState, fname: e.target.value, })} />
                
            </form>
            <h4 style={{ color: "red" }}>Your complete information is ={nameState.fname}</h4>
        </div>
    )
}
//bt it is not working

export default Form
