import React, { useState } from 'react';

const Counter=()=>{
    const initialValue=0;
    const[count,setCounter]=useState(initialValue);
    
    const increFive=()=>{
        for(let i=0;i<5;i++){
            setCounter((value)=>value+1);
        }
    }
    // console.log("hello");
    return(
        <>
            <button onClick={()=>setCounter(count+1)}>+</button>       
            <span>counter:{count}</span>
            <button onClick={()=>setCounter(count-1)}>-</button>
            <button onClick={increFive}>IncreFive</button>
        </>
    )
}

export default Counter;