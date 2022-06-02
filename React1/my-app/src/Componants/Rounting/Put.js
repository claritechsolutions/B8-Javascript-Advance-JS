import React, { useState, useEffect } from 'react'
import axios from "axios";
const Put = () => {
    const [data, setData] = useState([])
    const [post, setPost] = useState('')
    const[patch,setPatch] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log("Getting from Server=>", response.data)
                setData(response.data)
            })

            .catch(err => console.log(err))

    }, [])

    const putData = (e) => {
        e.preventDefault();
        axios.put(`https://jsonplaceholder.typicode.com/posts/1`, {
            title: "Hello World",
            body: "this is put data"
        }).then((response) => {
            console.log("put data=>", response.data)
            setPost(response.data);
        });

    }
    // if (!post) return "No post!"

    const patchData = (e) => {
        e.preventDefault();
        axios.patch(`https://jsonplaceholder.typicode.com/posts/2`, {
            title: "Hello World"
            
        }).then((response) => {
            console.log("patch data=>", response.data)
            setPatch(response.data);
        });

    }

    const arr = data.map((data, index) => {
        return (
            <tr>

                <td style={{ border: '1px solid black' }}>{data.id}</td>
                <td style={{ border: '1px solid black' }}>{data.title}</td>
                <td style={{ border: '1px solid black' }}>{data.body}</td>
                {/* <td style={{ border: '1px solid black' }}><button onClick={(e)=>putData(data.id,e)}>Put</button> </td> */}

            </tr>
        )
    })

    return (
        <div>
            <h3 style={{ textAlign: "center" }}>Axios Method-Put Data<br></br>
                <button type="button" class="btn btn-success" onClick={putData}>Put</button><br></br>
                <button type="button" class="btn btn-success" onClick={patchData}>Patch</button>
            </h3>
            <table class="table table-striped">
                <thead style={{ border: '1px solid black' }}>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                    </tr>
                </thead>
                {arr}
                
            </table>
            {post.title}
                {post.body}
                {patch.title}
        </div>
    )
}

export default Put
