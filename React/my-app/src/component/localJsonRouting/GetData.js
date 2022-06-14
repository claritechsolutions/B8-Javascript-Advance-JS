import React, { useState, useEffect } from 'react';

import axios from 'axios'
const GetData = () => {
 const[student,setStudent]=useState([]);
 
 useEffect(()=>{
     
       axios.get(`http://localhost:3001/student`)
       .then((response)=>{
           console.log(response)
           setStudent(response.data)
        })

       .catch((error)=>console.log(error)); 
    
 },[])
 return (
    <>
        <div className="mt-3 container">
        <table className="ctable">
          <thead>
            <tr>
              <th>sr.no</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Images</th>
            </tr>
          </thead>
          <tbody>
            {student.map((value,index) => {
              return (
                <>
                  <tr>
                    <td>{index+1}</td>
                    <td>{value.name}</td>
                    <td>{value.branch}</td>
                    <td><img className='image-fluid w-25 h-25' src={value.url}/></td>
                    <td><a href={value.url}></a></td>
                  </tr>
                </>
                )}
            )}
              </tbody>  
              </table>
              </div>
    </>
  )
}

export default GetData