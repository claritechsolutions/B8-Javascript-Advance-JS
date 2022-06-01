import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetch = () => {

    const [post, setPost] = useState();
    const [id, setId] = useState(3);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/3`)
            .then(response => {
                console.log("Response", response);
                setPost(response.data)
            }).catch(error => {
                console.log("Error", error);
            })
    }, [3])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/`)
            .then(response => {
                console.log("Response", response);
                setPosts(response.data)
            }).catch(error => {
                console.log("Error", error);
            })
    }, [])

    useEffect(() => {
        axios.post(`https://jsonplaceholder.typicode.com/posts/`, {
            id: '101',
            userId:'120',
            title: 'Anita',
            body: 'Software Developer',
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [101])
    return (
        <div>
            <table>
                <ol>
                    {
                        posts.map(post => <li>{post.title}</li>)
                    }
                </ol>
            </table>
            <input type="text" value={id} onChange={e => setId(e.target.value)} /><br></br>
            {post && post.id}
            {post && post.title}
        </div>
    )
}

export default DataFetch;