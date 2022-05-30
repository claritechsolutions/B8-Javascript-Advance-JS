import React, { useState } from 'react'

const Hooks = () => {
    const restVal = 0
    const [click, Setclick] = useState('restVal')
    const increTen = () => {
        for (let i = 0; i < 10; i++) {
            Setclick((ten) => ten + 1);
        }
    }
    return (
        <div style={{backgroundColor: "lightblue"}}>
            <h2> This is React Hooks(usestate)</h2>
            <p>{click}</p>
            <button type="button" class="btn btn-success" onClick={() => Setclick(click + 1)}>Increament</button><br></br><br></br>
            <button type="button" class="btn btn-primary" onClick={() => Setclick(click - 1)}>Decreament</button><br></br><br></br>
            <button type="button" class="btn btn-warning" onClick={() => Setclick(restVal)}>ResetValue</button><br></br><br></br>
            <button type="button" class="btn btn-info" onClick={increTen}> IncreamentBy10</button>


        </div>
    )
}

export default Hooks
