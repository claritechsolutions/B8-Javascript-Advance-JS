import React, { useState, useEffect } from 'react';

const Hookcounter=()=>{
    const initialCount=0,initialSum=0;
    const[counter, setCounter]=useState(initialCount);
    const[sum,setSum]=useState(initialSum);

    let fCount=()=>{
        console.log("useEffect Onload Count",new Date());
    }
    let fSum=()=>{
        console.log("useEffect Onload Sum");
    }
    useEffect(()=>{
        fCount();
    },[counter])

    useEffect(()=>{
        fSum();
    },[sum])
    return(
        <>
            <p>counter={counter}</p>
            <button onClick={()=>setCounter(counter+1)}>Increament</button><br></br>
            <p>SumCounter={sum}</p>
            <button onClick={()=>setSum(sum+5)}>sum</button>
        </>

    )
}
export default Hookcounter;