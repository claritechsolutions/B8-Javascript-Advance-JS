import React, { useState, useEffect } from 'react'
import axios from 'axios';
const DataFetch = () => {
    const [states, setstates] = useState([])
//     const postIntialState = {
//     title: ''
//   }
    const [post, setPost] = useState();
     const [id, setId] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then(response => {
                console.log("Response=>", response)
                //setstates(response.data)
                setPost(response.data)
            })
            .catch(error => {
                console.log("Error=>", error)
            })
    }, [id])

    return (
        <div>
            {/* <ul>
        {
          states.map(post => <li>{post.name}</li>)
        }
      </ul> */}
                <p>Names::</p>
            <input type="text" value={id} onChange={e => setId(e.target.value)} /><br></br>
            {post && post.name}
             
        </div>
    )
}

export default DataFetch
