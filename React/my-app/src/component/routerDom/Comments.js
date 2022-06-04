import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Comments=()=>{
    const[comments,setComment]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((respose)=>{
            console.log("------------------------Get Method-----------------------");
            console.log("Respose===>", respose);
            setComment(respose.data);
        })
        .catch((error)=>{
            console.log("Error==>",error);
        });
      
},[])

const[name, setnewData]=useState("");
const postData=()=>{
  axios.post('https://jsonplaceholder.typicode.com/comments',{name})
  .then((response)=>console.log(response.data))
  .catch((error)=>console.log(error))
}
// const newDataChange1={title:" "}
const[title,setnewDataChange]=useState('');

const putData=()=>{
  axios.put('https://jsonplaceholder.typicode.com/comments',title)
  .then((response)=>console.log(response.data))
  .catch((error)=>console.log(error))
}
return(
    <>
    <div className='container mt-4'>
    <div className='bg-light text-white'>
       <input type="text" className='m-2' value={name} onChange={e=>setnewData(e.target.value)}/>
       <button onClick={postData}>PostData</button><br></br>
   
       <input type="text" className='m-2' value={title} onChange={e=>setnewDataChange(e.target.value)}/>
       <button onClick={putData}>PutData</button>
    </div>
    <div>  
    <table className="table table-striped">
        <thead style={{ border: '3px solid gray' }}>
          <tr >
            <th style={{ border: '1px solid gray' }}>Id</th>
            <th style={{ border: '1px solid gray' }}>name</th>
            <th style={{ border: '1px solid gray' }}>email</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((values) => {
            return (
              <tr>
                <td style={{ border: '3px solid gray' }}>{values.id}</td>
                <td style={{ border: '3px solid gray' }}>{values.name}</td>
                <td style={{ border: '3px solid gray' }}>{values.email}</td>
             </tr>)})}
        </tbody>
        </table>
        </div>
        </div>
    </>
    )
}
export default Comments