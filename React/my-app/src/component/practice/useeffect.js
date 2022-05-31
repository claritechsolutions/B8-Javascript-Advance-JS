import React, { useState, useEffect } from 'react';

const Hello=()=>{
    const iniValue=0;
    const[count,setcount]=useState(iniValue);

    const updateState=()=>{
        setcount(count+1);
    }
    useEffect(()=>{
        console.log("boom");
    });
    return (
        <>
            <button onClick={updateState}>state: {count}</button>
        </>

    )
}

export default Hello