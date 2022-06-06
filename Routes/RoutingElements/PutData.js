import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PutData = () => {
    const [data, setData] = useState([])
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [post, setPost] = useState('')

    const putData = (id, e) => {
        axios.put(`http://localhost:3001/employees/${id}`, {
            name,
            email,
            address
        }).then((res) => {
            console.log('Editing data', res.data)
            setPost(res.data);
        })
            .catch(err => console.log(err))
    }

    const patchData = (id, e) => {
        axios.patch(`http://localhost:3001/employees/${id}`, {
            name

        }).then((res) => {
            console.log('Editing data', res.data)
            setName(res.data);
        })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:3001/employees')
            .then(response => {
                console.log("Extracting from server", response.data)
                setData(response.data)
            })

            .catch(err => console.log(err))

    }, [])
    const arr = data.map((data) => {
        return (
            <tr>
                <td style={{ border: '1px solid' }}>{data.id}</td>
                <td style={{ border: '1px solid' }}>{data.name}</td>
                <td style={{ border: '1px solid' }}>{data.email}</td>
                <td style={{ border: '1px solid' }}>{data.address}</td>
                <td style={{ border: '1px solid' }}><button className="btn btn-info" onClick={(e) => patchData(data.id, e)}>PATCH</button> </td>
                <td style={{ border: '1px solid' }}><button className="btn btn-info" onClick={(e) => putData(data.id, e)}>PUT</button> </td>
            </tr>
        )
    })
    return (
        <div className='container-fluid gap-3'>

            <h4 className='text-center'>Edit the data </h4>
            <form >
                <div className='d-flex justify-content-center'>
                    <label className='mx-3'>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <label className='mx-3'>Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className='mx-3'>Address</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <hr></hr>
                </div>
            </form>

            <table class="table table-success table-striped text-center">
                <thead>
                    <tr>
                        <th className='text-bg-secondary' style={{ border: '1px solid' }}>ID</th>
                        <th className='text-bg-secondary' style={{ border: '1px solid' }}>Name</th>
                        <th className='text-bg-secondary' style={{ border: '1px solid' }}>email</th>
                        <th className='text-bg-secondary' style={{ border: '1px solid' }}>Address</th>
                        <th className='text-bg-secondary' scope="col" style={{ border: '1px solid' }}>PATCH</th>
                        <th className='text-bg-secondary' scope="col" style={{ border: '1px solid' }}>PUT</th>

                    </tr>
                </thead>
                <tbody>
                    {arr}
                </tbody>
            </table>
        </div>
    )
}

export default PutData