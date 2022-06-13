import React ,{useEffect,useRef}from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus();
      }, []);
    
    return (
        <div>
            <input ref={inputRef} type="text"></input>
            {/* <button onClick={() => inputRef.current.focus()} >Foucs Input</button> */}
        </div>
    )
}

export default FocusInput
