import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SearchDisplay = (props) => {
    const [data, setData]=useState([])
    let data1=props
    console.log("data1",data1);
    useEffect(()=>{
        setData(props);
    },[])

    console.log("SearchDisplay",data);
  return (
   <>
   
   </>
  )
}

export default SearchDisplay