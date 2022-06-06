import React, { useEffect, useState } from 'react'
import axios from 'axios';

const GetData = () => {
    const [data, setData] = useState([])
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3001/employees')
            .then(response => {
                console.log("Extracting from server", response.data)
                setData(response.data)
            })

            .catch(err => console.log(err))

    }, [])
    const arr = data.map((data, index) => {
        return (
            <tr class="">
                <td style={{ border: '1px solid' }}>{data.id}</td>
                <td style={{ border: '1px solid' }}>{data.name}</td>
                <td style={{ border: '1px solid' }}>{data.email}</td>
                <td style={{ border: '1px solid' }}>{data.address}</td>
            </tr>
        )
    })
    return (
        <div className="text-center">
            <h2>All Users </h2>
            <div className="text-center">
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th className='text-bg-secondary' style={{ border: '1px solid white' }}>ID</th>
                            <th className='text-bg-secondary' style={{ border: '1px solid white' }}>Name</th>
                            <th className='text-bg-secondary' style={{ border: '1px solid white' }}>email</th>
                            <th className='text-bg-secondary' style={{ border: '1px solid white' }}>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GetData