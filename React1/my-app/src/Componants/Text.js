import React from 'react';
const Text = (props) => {
    console.log(props)
    return (
        <div>
            {props.children}
            <h3 style={{color: "blue"}}> This is using props</h3>
            <h2> Hello I'm {props.name} :: Learning {props.course } ::My Score is {props.score}</h2>
        </div>
    )
}
export default Text;