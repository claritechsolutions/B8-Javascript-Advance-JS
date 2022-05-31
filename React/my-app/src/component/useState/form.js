import React, { useState } from 'react';

const Form =()=>{

    const initialValue={
        fname:'',
        lname:'',
        branch:''
    }

    const[name, setName]=useState(initialValue);

    return(
      
        <div className='mt-4 container bg-light'>
       
            <h1><ins>Form</ins></h1>

            <div className='mt-4'>
                <input type="text" value={name.fname} onChange={e=>setName({...name,fname:e.target.value})}/>
                <input type="text" value={name.lname} onChange={e=>setName({...name,lname:e.target.value})}/>
                <input type="text" value={name.branch} onChange={e=>setName({...name,branch:e.target.value})}/>
                <h5 className='mt-3'><b>First Name is:<span className='text-success fw-bold ms-2'> {name.fname}</span></b></h5>
                <h5><b>Last Name is:<span className='text-success fw-bold ms-2'>{name.lname}</span></b></h5>
                <h5><b>Branch is :<span className='text-success fw-bold ms-2'>{name.branch}</span></b></h5>
            </div>
        </div>
    )   
}
export default Form;