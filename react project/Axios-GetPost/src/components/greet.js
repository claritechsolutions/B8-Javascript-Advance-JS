import React from "react";
import World from "./world";

const Greet = (props) => {
    var sum = 0;
    const total = () => {
        props.value.forEach((value) => {
            sum += value;
        });
        return <p>{sum}</p>;
    }

    return (
        <div>
            {props.children}
            <h1>Greeting from: {props.name}</h1><p> Position in the company: {props.position} </p><p>Total Employees::{total()}</p>
            {/* <World name={props.name} abs="testtest" /> */}
        </div>
    )
}

export default Greet;