import React, { useState, useEffect } from 'react';

const Time=()=>{

    const[time,setTime]=useState(new Date());

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date());
        },1000)
    },[])
    return(
        <>
            <div>{time.toString()}</div>
        </>

    )
}

export default Time