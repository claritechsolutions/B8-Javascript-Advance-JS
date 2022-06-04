import React, { useState,useEffect } from 'react';
import axios from 'axios';

const User=()=>{
    const[user,setUser]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((respose)=>{
            console.log("------------------------Get Method-----------------------");
            console.log("Respose===>", respose);
            setUser(respose.data);
        })
        .catch((error)=>{
            console.log("Error==>",error);
        });
},[])


return(
    <>
    <div className='container'>
    <table className="table table-striped">
        <thead style={{ border: '3px solid gray' }}>
          <tr >
            <th style={{ border: '1px solid gray' }}>name</th>
            <th style={{ border: '1px solid gray' }}>Email</th>
            <th style={{ border: '1px solid gray' }}>Address</th>
          </tr>
        </thead>
        <tbody>
          {user.map((values) => {
            return (
              <tr>
                <td style={{ border: '3px solid gray' }}>{values.name}</td>
                <td style={{ border: '3px solid gray' }}>{values.email}</td>
                <td style={{ border: '3px solid gray' }}>{values.address.city}</td>
             </tr>)})}
        </tbody>
        </table>
        </div>
    </>

)
            }
export default User