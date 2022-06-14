import React, { useReducer } from "react";
const initialState = 0;

const reducer = (state, action) => {
  if( action.type === "Increment"){
    return state + 1;
  }
  if( action.type === "Decrement"){
    return state - 1;
  }
 
};
const Prajkta = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <p>Count : {count}</p>
        <div>
          <button onClick={() => dispatch({type:"Increment"})}>INC</button>
          <button onClick={() => dispatch({type:"Decrement"})}>DEC</button>
        </div>
      </div>
    </>
  );
};

export default Prajkta;
