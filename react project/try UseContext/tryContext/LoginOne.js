import React, { useContext } from 'react'
import { FirstContext } from './ContextOne';

const LoginOne = () => {
    const {setUserName} = useContext(FirstContext)

    return (
        <div>
            <input onChange={(event) => setUserName(event.target.value) }></input>
        </div>
  )
}

export default LoginOne