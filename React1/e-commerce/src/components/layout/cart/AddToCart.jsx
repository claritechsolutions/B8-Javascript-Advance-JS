import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AddToCart = () => {
    const [CartData, setCartData] = useState([]);
    useEffect(() => {
        getCartData();
    }, [])

    const getCartData = () => {
        axios.get(`http://localhost:3001/cart`)
            .then((response) => {
                console.log(response);
                setCartData(response.data);

            })
            .catch((error) => console.log(error))
    }

    const totalPriceIncrease = (data) => {
        let filterData = CartData.filter((element) => data.id === element.id)
        if (filterData[0].id === data.id) {
            axios.patch(`http://localhost:3001/cart/${filterData[0].id}`,
                {
                    nquantity: data.nquantity + 1,
                    totalPrice: (data.nquantity + 1) * data.price
                }).then((res) => getCartData())
                .catch((error) => console.log(error));

        }
    }

    const totalPriceDecrease = (data) => {

        let filterData = CartData.filter((element) => data.id === element.id)
        if (filterData[0].id === data.id) {
            if (data.nquantity > 1) {
                axios.patch(`http://localhost:3001/cart/${filterData[0].id}`,
                    {
                        nquantity: data.nquantity - 1,
                        // price: Subtotal,

                    }).then((res) => getCartData())
                    .catch((error) => console.log(error));
            }
        }
    }
    const RemoveItem = (id) => {
        axios.delete(`http://localhost:3001/cart/${id}`)
            .then((res) => {
                console.log("one item deleted")
                getCartData()

            })
            .catch((error) => console.log(error))
    }
    let resultPrice = CartData.reduce((total, curr) => total + curr.totalPrice, 0)

    return (
        <>

            <div className="container mt-5">
                <div className='row '>
                    <div className="col-6 btn_proceedtobuy">
                        <div className='fs-4'>Subtotal({CartData.reduce((total, curr)=>total+curr.nquantity,0)} item) : {resultPrice}</div>
                        <button className='btn btn-warning m-2 px-5 text-white fw-bold p-1'>Proceed to Buy</button>
                    </div>

                </div>

                {

                    CartData.length && CartData.map((data) => {

                        return (
                            <>
                                <div className="card mb-3 border-1 Custom_Btn sm-100" style={{ width: "60%" }} >
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <img src={data.image} className="img-fluid d-flex flex-start" alt="" style={{ height: "18rem", width: "50%" }} />
                                        </div>
                                        <div className="col-lg-6 col-sm-12 d-flex align-items-center">
                                            <div className="card-body">
                                                <h5 className="card-title">{data.title}</h5>
                                                <p className="card-text">{data.color}</p>
                                                <p className="card-text"><small className="text-muted">{data.price * data.nquantity}</small></p>
                                                <button className='rounded-circle px-1 m-1' onClick={() => totalPriceDecrease(data)}>-</button>
                                                <span className='border border-secondary m-2 p-2'>{data.nquantity}</span>
                                                <button className='rounded-circle px-1 m-1' onClick={() => totalPriceIncrease(data)}>+</button>
                                                <div className='btn-group mt-2'>
                                                    <button className="btn btn-primary m-2 text-white fw-bold" >Place Order</button>
                                                    <button className="btn btn-danger m-2 text-white fw-bold" onClick={() => RemoveItem(data.id)} >Remove Item</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default AddToCart