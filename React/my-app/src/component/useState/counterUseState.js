import React, { useState } from 'react';

const Counter=()=>{
const initialCount=0;
const[count,setCount]=useState(initialCount);

const increamentFive=()=>{
    for(let i=0;i<5;i++){
        setCount((value)=>value+1);
    }
}
return(
    <div className='container bg-light'>      
        <h1 className='mt-3'><ins>Counter</ins></h1>
        <div className='mt-5'></div>
        <button className='btn btn-secondary px-3 fw-bold fs-4' onClick={()=>setCount(count+1)}>+</button>
        <span className='fw-bolder text-danger fs-4'> Count : {count} </span>
        <button className='btn btn-secondary px-3 fw-bold fs-4' onClick={()=>setCount(count-1)}>-</button><br></br>
        <button className='btn btn-secondary px-3 fw-bold fs-4 mt-2' onClick={()=>setCount(initialCount)}>Reset</button><br></br>
        <button className='btn btn-secondary px-3 fw-bold fs-4 mt-2' onClick={increamentFive}>Increament by 5</button>
    </div>
)
}
export default Counter;
