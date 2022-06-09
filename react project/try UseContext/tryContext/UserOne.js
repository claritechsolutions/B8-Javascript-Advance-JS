import React, { useContext } from 'react'
import { FirstContext } from './ContextOne';


const UserOne = () => {
    const {userName} = useContext(FirstContext);
    return (
        <div >
            <h1 className='text-info bg-dark'>User:{userName}</h1>
        </div>
    )
}

export default UserOne