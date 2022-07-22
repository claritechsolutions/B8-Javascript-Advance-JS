import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AddCartbtn from '../cart/AddCartbtn';

const Allproducts = () => {
    let num = 0
    const [Data, setData] = useState([]);
    const [Category, setCategory] = useState([]);
    
    useEffect(() => {
        axios.all([
            axios.get("http://localhost:3001/products"),
            axios.get("http://localhost:3001/category")
        ])
            .then(axios.spread((response1, response2) => {
                console.log(response1.data, response2.data)
                setData(response1.data)
                setCategory(response2.data)
            }))
            .catch((error) => console.log(error))
    }, [])


    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    {
                        Data.length ? Data.map((product) => {
                            return (
                                <div className="col-lg-4 col-xl-3 col-sm-6 my-3">
                                    <div className="card card_cust shadow-lg" style={{ width: "18rem" }}>
                                        <img src={product.image} className="card-img-top ms-lg-5" alt="..."
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.price}</p>
                                            {/* <button className="btn btn-primary m-2">Add to cart</button>                      */}
                                            <AddCartbtn product={product} />
                                            <button href="#" className="btn btn-primary text-dark">More Details</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : null

                    }
                </div>
            </div>
        </>
    )
}

export default Allproducts