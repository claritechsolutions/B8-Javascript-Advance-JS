import React, { useState, useEffect } from "react";

const HookCounter=()=>{

    const[counter,setCounter]= useState(0);
    const[sum,setSum]=useState(0);

    const loadAtCounterUpdate=()=>{
        console.log("Its Counter Update");
    }
    const loadAtSumUpdate=()=>{
        console.log("Its Sum Update");
    }

    useEffect(()=>{loadAtCounterUpdate();},[counter])
    useEffect(()=>{loadAtSumUpdate();},[sum])

    return(
        <div>
            Counter:{counter}<br></br>
            Sum:{sum}<br></br>
            <button onClick={()=>setCounter(counter+1)}>Increment Button</button>
            <button onClick={()=>setSum(sum+10)}>SUM Button</button>
        </div>
    )
}

export default HookCounter;