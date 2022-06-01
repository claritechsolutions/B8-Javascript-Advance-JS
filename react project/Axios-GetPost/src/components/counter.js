import React, { useState } from "react"

const Counter = () => {
    const initialValue = 0;
    const [counter, setCounter] = useState(initialValue);

    const increFive = () => {
        for (let i = 0; i < 5; i++) {
          setCounter((ele) => ele + 1);
        }
      }
    
      return (
        <div className="d-grid gap-3 mx-5 align-items-center">
          
          {/* <button onClick={() => setCounter(counter + 1)}>Count -- {counter}</button> */}
          <button className="btn btn-lg btn-primary" onClick={() => setCounter(counter + 1)}>Increase by 1</button>
          <button className="btn btn-lg btn-success" onClick={() => setCounter(counter - 1)}>Decrease by 1</button>
          <button className="btn btn-lg btn-warning" onClick={increFive}>Add 5</button>
          <button className="btn btn-lg btn-info" onClick={() => setCounter(initialValue)}>Reset</button>
          <div className="d-flex justify-content-center"><h1>
          Count : {counter}</h1>
          </div>
        </div>
      )
    }
    
    export default Counter 