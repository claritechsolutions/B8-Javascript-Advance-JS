import React, { useEffect, useRef, useState } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)
    const [inputvalue,setInputvalue]=useState("")
    const count = useRef(0);

    useEffect (()=>{
        count.current=count.current+1;
    });
    return (
        <div><label>Enter Name</label>
            <input ref={inputRef} id="Input1" type="text" onChange={(e)=>{setInputvalue(e.target.value)}}/>
            <h4>Render Count: {count.current}</h4>
                       
            <button onClick={() => inputRef.current.focus()}>Focus</button>

        </div>
    )
}

export default FocusInput