import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchData=()=>{
    const[posts,setPosts]=useState([]);
    const[title,setTitle] = useState('')
    const[body,setBody] = useState('')
    const[id,setId]=useState(1);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((respose)=>{
            console.log("------------------------Get Method-----------------------");
            console.log("Respose===>", respose);
            setPosts(respose.data);
        })
        .catch((error)=>{
            console.log("Error==>",error);
        });
               
    },[id])
        const postData=(e)=>{
        axios.post(`https://jsonplaceholder.typicode.com/posts/`,{title,body})
        .then((respose)=>{
            console.log("----------------POST Method------------------");
            console.log("Post Data",respose)
            // setPosts(respose.data);

        }).catch((error)=>{
            console.log(error);
        })
    }
    

    return(

        <>
        <div className='container'>
           {/* <p>{posts.map((ele)=>{
               return(
                 <p>{ele.title}</p>
               )
           })}</p> */}
        
            <input type="text" value={id} onChange={e=>setId(e.target.value)}></input>
            <table className="table table-striped">
            <thead>
                <tr style={{"width":"50%", "border":"1px"}}>
                    <th style={{"width":"50%"}}>Title</th>
                    <th style={{"width":"50%"}}>Body</th>
                </tr>
            </thead>
            <tbody style={{"width":"50%", "border":"1px"}}>
                <tr>
                    <td>{posts && posts.title}</td>
                    <td>{posts && posts.body}</td>
                </tr>
            </tbody>
            </table>

             {/* <p>{posts && posts.title}</p> */}           
            </div>
            <div>
                <h1>Post Data</h1>
                <label>Enter Title  </label>
                <input type="text" value={title} onChange={e=>setTitle(e.target.value)}/><br></br>
                <label>Enter Body  </label>
                <input type="text" value={body} className="mt-3" onChange={e=>setBody(e.target.value)}/><br></br>
                <button className='mt-3' onClick={postData}>PostData</button>

            </div>
          
        </>
    )

}

export default FetchData;