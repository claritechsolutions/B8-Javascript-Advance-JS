import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Post = () => {
	const [data, setData] = useState([])
    const[title,setTitle] = useState('')
    const[body,setBody] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log("Getting from Server=>", response.data)
                setData(response.data)
            })

            .catch(err => console.log(err))

    }, [])

    const postData=(e)=>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',{
            title,
        body
        })
        .catch(err => console.log(err))  
    }
    const arr =data.map((data,index)=>{
        return(
            <tr>
               
                <td style={{border:'1px solid black'}}>{data.id}</td>
                <td style={{border:'1px solid black'}}>{data.title}</td>
                <td style={{border:'1px solid black'}}>{data.body}</td>

            </tr>
        )
    })


	return (
		<div>
			 <h3 style={{textAlign:"center"}}>Axios Method-Post Data</h3>
			 <form style={{textAlign:"center"}} >
                <label><b>Title::</b></label>
                <input type="text" value={title} onChange={(e)=>setTitle (e.target.value)}/>
                {/* <hr></hr> */}
                <label><b>::Body::</b></label>
                <input type="text" value={body} onChange={(e)=>setBody(e.target.value)}/>
                <hr></hr>
                <button type="button" class="btn btn-success" onClick={postData}>POST</button>

            </form>
            <table class="table table-striped">
                <thead style={{border:'1px solid black'}}>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                </tr>
                </thead>
               {arr}  
            </table>

		</div>
	)
}

export default Post
