import React, { useState, useEffect } from 'react'
import axios from 'axios'
const PostGet = () => {
    const [data, setData] = useState([])
    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log("Getting from Server=>", response.data)
                setData(response.data)
            })

            .catch(err => console.log(err))

    }, [])

    const postData = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            userId,
            title,
            body
        }).then(res => console.log('Posting data', res))
            .catch(err => console.log(err))
    }
    const arr = data.map((data, index) => {
        return (
            <tr>

                <td style={{ border: '1px solid blue' }}>{data.userId}</td>
                <td style={{ border: '1px solid blue' }}>{data.title}</td>
                <td style={{ border: '1px solid blue' }}>{data.body}</td>

            </tr>
        )
    })

    return (
        <div>
            <h2>Enter the data to post</h2>
            <form>
                <label>ID</label>
                <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Body</label>
                <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
                <br />
                <button onClick={postData}>POST</button> <hr></hr>

            </form>
            <table class="table table-striped">
                <thead style={{ border: '1px solid black' }}>
                    <tr>
                        <th style={{ border: '1px solid black' }}>ID</th>
                        <th style={{ border: '1px solid black' }}>Title</th>
                        <th style={{ border: '1px solid black' }}>Body</th>
                    </tr>
                </thead>
                {arr}
            </table>

        </div>
    )
}

export default PostGet;