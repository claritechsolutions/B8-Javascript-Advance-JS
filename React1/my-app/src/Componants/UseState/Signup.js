import React, { useState } from 'react'
import './Style.css'

const Signup = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [conformPass, setconformPass] = useState('')
    const handleChange = (e) => {
        setName(e.target.value);
    }
    const handleAge = (e) => {
        setAge(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlepass = (e) => {
        setpassword(e.target.value)
    }
    const handleConfpass = (e) => {
        setconformPass(e.target.value)
    }
    const handleSubmit = (e) => {
        if (password !== conformPass) {
            console.log("password Not Match")
        } else {
            console.log('A form was submitted with Name :"' + name +
                '" ,Age :"' + age + '" and Email :"' + email + '"');
        }
        e.preventDefault();
    }


    return (
        <div className='sign_up'>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <h3>Sign_Up</h3>
                <label> Name:</label><br />
                <input type='text' value={name} onChange={(e) => { handleChange(e) }} /><br></br>
                <label>Age:</label><br />
                <input type='text' value={age} onChange={(e) => { handleAge(e) }} /><br></br>
                <label>Email:</label><br />
                <input type='text' value={email} onChange={(e) => { handleEmail(e) }} /><br></br>
                <label>Password:</label><br />
                <input type='text' value={password} onChange={(e) => { handlepass(e) }} /><br></br>
                <label>Conform-Pass:</label><br />
                <input type='text' value={conformPass} onChange={(e) => { handleConfpass(e) }} /><br></br>
                <input type='submit' value='Submit' />
                {/* <button  type="button" class="btn btn-primary mt-3 px-3" onSubmit='submit' value='Submit'>Sign Up</button> */}
            </form>
        </div>
    )
}

export default Signup
