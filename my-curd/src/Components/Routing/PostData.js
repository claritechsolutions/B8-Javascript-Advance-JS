import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PostData= () => {
    const [data, setData] = useState([])
    const [Name, setName] = useState('')
    const [City, setCity] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3000/emp')
            .then(response => {
                console.log("Getting from Server=>", response.data)
                setData(response.data)
            })

            .catch(err => console.log(err))

    }, [])

    const postData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/emp', {
            Name,
            City

        })
            .catch(err => console.log(err))
    }
    const arr = data.map((data) => {
        return (
            <tr>

                <td style={{ border: '1px solid black' }}>{data.id}</td>
                <td style={{ border: '1px solid black' }}>{data.Name}</td>
                <td style={{ border: '1px solid black' }}>{data.City}</td>

            </tr>
        )
    })


    return (
        <div class="container">
            <div>
                <h3 style={{ textAlign: "center" }}>Axios Method-Post Data</h3>
                <form style={{ textAlign: "center" }} >
                    <label><b>Enter Name</b></label>
                    <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
                    {/* <hr></hr> */}
                    <label><b>Enter City</b></label>
                    <input type="text" value={City} onChange={(e) => setCity(e.target.value)} />
                    <hr></hr>
                    <button type="button" class="btn btn-success" onClick={postData}>POST</button>

                </form>
                <table class="table table-striped">
                    <thead style={{ border: '1px solid black' }}>
                        <tr>
                            <th scope="col" style={{ border: '1px solid black' }}>ID</th>
                            <th scope="col" style={{ border: '1px solid black' }}>Name</th>
                            <th scope="col" style={{ border: '1px solid black' }}>City</th>
                        </tr>
                    </thead>
                    {arr}
                </table>
                {/* {title.Name} */}

            </div>
        </div>
    )
}

export default PostData