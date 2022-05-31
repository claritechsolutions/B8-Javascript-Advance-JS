import React, { useState } from 'react';

const Hello=()=>{

    initialArr={
        fname:"Backbencher",
        age:23,
    }
    const[arr,setarry]=useState(initialArr);

    onNameChange=()=>{
        setarry({...arr, name:e.target.value})
    }

    onAgechange=()=>{
        setarry({...arr, age:e.target.value});
    }
    return(
        <>
            <input type="text" value={arr.fname} onChange={onNameChange}/>
            <input type="text" value={arr.age} onchange={onAgechange}/>
            <h1>Name: {arr.name}, Age : {arr.age}</h1>

        </>

    )

}

export default Hello