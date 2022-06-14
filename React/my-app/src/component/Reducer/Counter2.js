import React, {useReducer} from "react";


  const initialState = {
    firstCounter: 0,
    SecondCounter: 10,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, firstCounter: state.firstCounter + action.value };

      case "decrement":
        return { ...state, firstCounter: state.firstCounter - action.value };

      case "increment2":
        return { ...state, SecondCounter: state.SecondCounter + action.value };

      case "decrement2":
        return { ...state, SecondCounter: state.SecondCounter - action.value };
      case "reset":
          return initialState;
      default:
        return state;
    }
}
    const Counter2 = () => {
        const [count, dispatch] = useReducer(reducer,initialState)

  return(
       <div>
           <div>
               <div>First Counter : {count.firstCounter}</div>
               <button onClick={()=>dispatch({type:'increment',value:2})}>Increament</button>
               <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>

               <button onClick={()=>dispatch({type:'increment',value:5})}>Increament 5</button>
               <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement 5</button>

               <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
           </div>
           <div>
               <div>Second Counter : {count.SecondCounter}</div>
                <button onClick={()=>dispatch({type:'increment2', value:10})}>Increament</button>
                <button onClick={()=>dispatch({type:'decrement2',value:10})}>Decrement</button>
                <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
           </div>
       </div>
  )
};

export default Counter2;
