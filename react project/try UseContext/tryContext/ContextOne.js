import React, { useState, createContext } from 'react'
import LoginOne from './LoginOne';
import UserOne from './UserOne';
import PasswOne from './PasswOne';

export const FirstContext = createContext();
const ContextOne = () => {
    const [userName, setUserName] = useState("");
    const [password,setPassword] = useState("");
    return (
        <div className='align-items-center gap-5'>
            <FirstContext.Provider value={{userName, setUserName}}>
                <UserOne /><LoginOne /> <PasswOne/>
            </FirstContext.Provider>
            <button>Submit</button>
        </div>
    )
}

export default ContextOne