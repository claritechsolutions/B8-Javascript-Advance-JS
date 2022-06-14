import React, { useMemo,useState } from 'react'

const Testmemo = () => {
    const [counter, setcounter] = useState(0)
    const [counterto, setcounterto] = useState(0)
    const incrementOne = () => {
        setcounter(counter + 1);
    }
    const incrementtwo=()=>{
        setcounterto(counterto+1);
    }
    // useMemo(function, [dependencies])
    const EvenOdd = useMemo(() =>{
    let i=0;
    while(i < 200000000) i++;
    return counter % 2===0
},[counter])
    return (
        <div>
            <div>
                <button onClick={incrementOne}> Counter One = {counter}</button>
                <span>{EvenOdd ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementtwo}>Counter Two={counterto}</button>
            </div>
        </div>
    )
}

export default Testmemo
