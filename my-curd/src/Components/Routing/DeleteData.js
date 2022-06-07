import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DeleteData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(' http://localhost:3000/emp')
            .then(response => {
                console.log("Getting from Server=>", response.data)
                setData(response.data)
            })

            .catch(err => console.log(err))

    }, [])
       const postDelete = (id, e) => {
        e.preventDefault();
        axios.delete(` http://localhost:3000/emp/${id}`)
            .then(res => console.log('Deleting data!!!', res.data))
            .catch(err => console.log(err))
    }
    const arr = data.map((data, index) => {
        return (
            <tr>

                <td style={{ border: '1px solid black' }}>{data.id}</td>
                <td style={{ border: '1px solid black' }}>{data.Name}</td>
                <td style={{ border: '1px solid black' }}>{data.City}</td>
                <td style={{ border: '1px solid black' }}> <button onClick={(e) => postDelete(data.id, e)}>Delete</button>
                </td>
            </tr>
        )
    })

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div class="container">
            <div>
                 <table class="table table-striped">
                    <thead style={{ border: '1px solid black' }}>
                        <tr>
                            <th scope="col" style={{ border: '1px solid black' }}>ID</th>
                            <th scope="col" style={{ border: '1px solid black' }}>Name</th>
                            <th scope="col" style={{ border: '1px solid black' }}>City</th>
                            <th scope="col" style={{ border: '1px solid black' }}>Delete</th>

                        </tr>
                    </thead>
                    {arr}
                </table>
                <form>
                    <button className="btn btn-primary my-3" onClick={refreshPage}>Refresh Page</button>
                </form>
            </div>
        </div>
    )
}

export default DeleteData