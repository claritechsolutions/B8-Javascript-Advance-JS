import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Post=()=>{
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((respose)=>{
            console.log("------------------------Get Method-----------------------");
            console.log("Respose===>", respose);
              setPosts(respose.data);
        })
        .catch((error)=>{
            console.log("Error==>",error);
        });
      
},[])

const[title,setnewData]=useState('');
const postData=()=>{
  axios.post('https://jsonplaceholder.typicode.com/posts/',{title})
  .then((response)=>console.log(response.data))
  .catch((error)=>console.log(error))
}
// const newDataChange1={title:" "}

const newData={title:"Dhanshri Mane"}
const putData=()=>{
  axios.put('https://jsonplaceholder.typicode.com/posts/6',newData)
  .then((response)=>console.log(response.data))
  .catch((error)=>console.log(error))
}
return(
    <>
    <div className='container mt-4'>
    <div className='bg-light text-white'>
       <input type="text" className='m-2' value={title} onChange={e=>setnewData(e.target.value)}/>
       <button onClick={postData}>PostData</button><br></br>
   
       {/* <input type="text" className='m-2' value={title} onChange={e=>setnewDataChange(e.target.value)}/> */}
       <button onClick={putData}>PutData</button>
    </div>
    <div>  
    <table className="table table-striped">
        <thead style={{ border: '3px solid gray' }}>
          <tr >
            <th style={{ border: '1px solid gray' }}>Id</th>
            <th style={{ border: '1px solid gray' }}>Title</th>
            <th style={{ border: '1px solid gray' }}>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((values) => {
            return (
              <tr>
                <td style={{ border: '3px solid gray' }}>{values.id}</td>
                <td style={{ border: '3px solid gray' }}>{values.title}</td>
                <td style={{ border: '3px solid gray' }}>{values.body}</td>
             </tr>)})}
        </tbody>
        </table>
        </div>
        </div>
    </>
    )
}
export default Post