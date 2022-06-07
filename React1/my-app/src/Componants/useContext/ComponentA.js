import React from 'react'
import ComponentB from './ComponentB'
const ComponentA = () => {
    return (
        <div>
            <p> Heyy i'm in ComponentA</p>
            <ComponentB/>
        </div>
    )
}

export default ComponentA
