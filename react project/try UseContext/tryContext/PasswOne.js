import React, { useContext } from 'react'
import { FirstContext } from './ContextOne'


const PasswOne = () => {
  const {password,setPassword}=useContext(FirstContext)
  return (
    <div>
        <h4>Password</h4>
        <input type={'password'} onChange={(e)=>setPassword(e.target.value)}></input>
    </div>
  )
}

export default PasswOne