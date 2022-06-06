import React, { useState, useEffect } from 'react'
import axios from 'axios'


const PostData = () => {
    const [data, setData] = useState([])
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const postData = (e) => {
        
        axios.post('http://localhost:3001/employees', {
            id,
            name,
            email,
            address
        }).then(res => console.log('Posting data', res))
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
    const arr = data.map((data, index) => {
        return (
            <tr>

                <td style={{ border: '1px solid' }}>{data.id}</td>
                <td style={{ border: '1px solid' }}>{data.name}</td>
                <td style={{ border: '1px solid' }}>{data.email}</td>
                <td style={{ border: '1px solid' }}>{data.address}</td>

            </tr>
        )
    })
    return (
        <div className='container-fluid gap-3'>
            <h4 className='text-center'>Enter the data to post</h4>
            <form>

                <label className='mx-3'>ID</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                <label className='mx-3'>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label className='mx-3'>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className='mx-3'>Address</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                <button className='btn, btn-secondary mx-3' onClick={postData}>POST</button> <hr></hr>
            </form>
            <table class="table table-success table-striped text-center">
                <thead>
                    <tr>
                        <th className='text-bg-secondary' style={{ border: '1px solid' }}>ID</th>
                        <th className='text-bg-secondary' style={{ border: '1px solid' }}>Name</th>
                        <th className='text-bg-secondary' style={{ border: '1px solid' }}>email</th>
                        <th className='text-bg-secondary' style={{ border: '1px solid' }}>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {arr}
                </tbody>
            </table>
        </div>
    )
}

export default PostData