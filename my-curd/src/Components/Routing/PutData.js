import React, { useState, useEffect } from 'react'
import axios from "axios";
const PutData = () => {
   
    const [data, setData] = useState([])
    const [post, setPost] = useState('')
    const [Name, setName] = useState('')
    const [City, setCity] = useState('')

    useEffect(() => {
        axios.get(' http://localhost:3000/emp')
            .then(response => {
                console.log("Getting from Server=>", response.data)
                setData(response.data)
            })

            .catch(err => console.log(err))

    }, [])

    const putData = (id, e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/emp/${id}`, {
            // title: "Payal Wasankar",
            // body: "M,tech"
            Name,
            City
        }).then((response) => {
            console.log("put data=>", response.data)
            setPost(response.data);
        });

    }
    // if (!post) return "No post!"

    // const patchData = (id, e) => {
    //     e.preventDefault();
    //     axios.patch(`http://localhost:3001/emp/${id}`, {
    //         // 
    //         Name

    //     }).then((response) => {
    //         console.log("patch data=>", response.data)
    //         // setPatch(response.data);
    //         setCity(response.data)
    //     });

    // }

    const arr = data.map((data) => {
        return (
            <tr>

                <td style={{ border: '1px solid black' }}>{data.id}</td>
                <td style={{ border: '1px solid black' }}>{data.Name}</td>
                <td style={{ border: '1px solid black' }}>{data.City}</td>
                {/* <td style={{ border: '1px solid black' }}><button onClick={(e) => patchData(data.id, e)}>Patch</button> </td> */}
                <td style={{ border: '1px solid black' }}><button onClick={(e) => putData(data.id, e)}>Put</button> </td>


            </tr>
        )
    })

    return (
        <div class="container">
            <div>
                
                <form style={{ textAlign: "center" }} >
                    <label><b>Name::</b></label>
                    <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
                    {/* <hr></hr> */}
                    <label><b>City::</b></label>
                    <input type="text" value={City} onChange={(e) => setCity(e.target.value)} />
                    <hr></hr>
                    {/* <button type="button" class="btn btn-success" onClick={postData}>POST</button> */}

                </form>
                {/* <h3 style={{ textAlign: "center" }}>Axios Method-Put Data<br></br>
                    <button type="button" class="btn btn-success" onClick={putData}>Put</button>::
                    <button type="button" class="btn btn-success" onClick={patchData}>Patch</button>
                </h3> */}
                <table class="table table-striped">
                    <thead style={{ border: '1px solid black' }}>
                        <tr>
                            <th scope="col" style={{ border: '1px solid black' }}>ID</th>
                            <th scope="col" style={{ border: '1px solid black' }}>Name</th>
                            <th scope="col" style={{ border: '1px solid black' }}>City</th>
                            {/* <th scope="col" style={{ border: '1px solid black' }}>Patch</th> */}
                            <th scope="col">Put</th>
                        </tr>
                    </thead>
                    {arr}

                </table>
                {/* {post.title}
                {post.body}
                {patch.title} */}
            </div>
        </div>
    )
}

export default PutData