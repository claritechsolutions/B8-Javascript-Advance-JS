import React, {useEffect,useState} from 'react'
import axios from 'axios';
const Albums = () => {

        const[album,setAlbum]=useState([]);
        useEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/albums')
            .then((respose)=>{
                console.log("------------------------Get Method-----------------------");
                console.log("Respose===>", respose);
                setAlbum(respose.data);
            })
            .catch((error)=>{
                console.log("Error==>",error);
            });
          
    },[])
    
    const[title, setnewData]=useState("");
    const postData=()=>{
      axios.post('https://jsonplaceholder.typicode.com/posts',{title})
      .then((response)=>console.log(response.data))
      .catch((error)=>console.log(error))

    }
   
    // const[newData,setnewDataChange]=useState('');
    const newData={title:"Dhanshri"};
    const putData=()=>{
      axios.put('https://jsonplaceholder.typicode.com/posts/1',newData)
      .then((response)=>console.log(response.data))
      .catch((error)=>console.log(error))
    }

    return(
        <>
        <div className='container'>
        <div className='bg-light text-white'>
           <input type="text" className='m-3' value={title} onChange={e=>setnewData(e.target.value)}/>
           <button onClick={postData}>PostData</button><br></br>
        
           {/* <input type="text" className='m-3' value={newData} onChange={e=>setnewData(e.target.value)}/> */}
           <button onClick={putData}>PutData</button>
        </div>
        <div>  
        <table className="table table-striped">
            <thead style={{ border: '3px solid gray' }}>
              <tr >
                <th style={{ border: '1px solid gray' }}>Id</th>
                <th style={{ border: '1px solid gray' }}>Title</th>
              </tr>
            </thead>
            <tbody>
              {album.map((values) => {
                return (
                  <tr>
                    <td style={{ border: '3px solid gray' }}>{values.id}</td>
                    <td style={{ border: '3px solid gray' }}>{values.title}</td>
                    
                 </tr>)})}
            </tbody>
            </table>
            </div>
            </div>
        </>
    
    )
}

export default Albums