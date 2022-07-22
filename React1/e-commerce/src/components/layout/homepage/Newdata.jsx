import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Newdata = () => {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3004/mainData`)
            .then((res) => {
                // console.log(res)
                setProductData(res.data)
            })
            .catch((err) => console.log(err))
    }, [])
    const filterCate=(cate)=>{
        productData.filter((data)=>{
            if(data.color===cate){
                console.log("true");
            }
            else{
                console.log("false")
            }
        })
    }
    return (
        <>

        <button onClick={()=>filterCate("id")}>category</button>
        <button onClick={()=>filterCate("product")}>category</button>
            {
                productData.map((data) => {
                    return (
                        <>
                            {data.product && data.product.length ? data.product.map((cate) => {
                                return (
                                    <>
                                        <div>{cate.color_id}</div>
                                    </>
                                )
                            }) : null
                            }
                        </>
                    )
                })
            }
        </>
    )
}

export default Newdata