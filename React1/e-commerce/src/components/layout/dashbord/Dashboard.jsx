import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Dashboard = () => {
    const [data, setData]=useState([]);
    

    return (
        <>
            <div className='btn-group'>
                <button className='btn mt-4 btn-danger'>Add Product</button>
                {/* <button></button>
                <button></button>
                <button></button> */}
            </div>
        </>
    )
}

export default Dashboard