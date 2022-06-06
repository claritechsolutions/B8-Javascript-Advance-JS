import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DeleteData = () => {
  const [data, setData] = useState([])
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  const deleteData = (id) => {
     
      axios.delete(`http://localhost:3001/employees/${id}`)
      .then(res => console.log('Deleting data', res.data))
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
          <td style={{ border: '1px solid' }}>
          <button className="btn btn-info" onClick={() => deleteData(data.id)}>DELETE</button> 
          </td>
      </tr>
  )
})

  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center'>
    <h4>Delete the data from the table </h4>
    </div>
    <table className="table table-success table-striped text-center">
      <thead>
     <tr>
       <th className='text-bg-secondary' scope="col" style={{ border: '1px solid' }}>ID</th>
       <th className='text-bg-secondary' scope="col" style={{ border: '1px solid' }}>Name</th>
       <th className='text-bg-secondary' scope="col" style={{ border: '1px solid' }}>email</th>
       <th className='text-bg-secondary' scope="col" style={{ border: '1px solid' }}>Address</th>
       <th className='text-bg-secondary' scope="col" style={{ border: '1px solid' }}>Delete</th>
     </tr>
     </thead>
     <tbody>
    {arr}
    </tbody>
  </table>
 </div>
  )
}

export default DeleteData