// import React from 'react'
// import Hello from './hello'
const Welcome=(props)=>{
    console.log("props",{props})    

    let sum=0;
    const total=()=>{
        props.values.forEach((value) => {
            sum += value;
       });
       return <h4>{sum}</h4>
    }

    return(
        <div>             
            <h3 style={{color: "blue"}}>Greeting from :: {props.name} ::  designation is ::{props.desig} total is::{total()}</h3>
               {/* {props.children} */}
            {/* <Hello name={props.name} xyz="testtest"/> */}
        </div>
    )
}

export default Welcome;