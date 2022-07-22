import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import CartAction from '../../redux/CartRedux/CartAction'
import { useDispatch, useSelector } from 'react-redux'

const AddCartbtn = (props) => {
    // console.log("PROPS", props);
    const dispatch=useDispatch();
    const CountNum=useSelector(state=>state.numOfCartProduct);

    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/cart`)
            .then((response) => {
                // console.log(response)
                setCartData(response.data);
            })
            .catch((error) => console.log(error))
    }, [])

    const addToCart = () => {
        let regex = /\D/g;
        let result = props.product.price.replace(regex, "");
        let AddData = {
            id: props.product.id,
            title: props.product.title,
            image: props.product.image,
            color: props.product.color,
            price: result,
            nquantity:1,
            totalPrice : parseInt(result),
        }

        let filterData = cartData.filter((data) => data.title === AddData.title)
        // console.log("FilterData", filterData);

        if(filterData.length===0){
           
            axios.post(`http://localhost:3001/cart`, AddData)
            .then((response) => {
                console.log(response)
                dispatch(CartAction());
            })
            .catch((error) => console.log(error))
        }
        

    }
    return (
        <>
            {/* <div className="add-to-cart mb-3"> */}
                <button onClick={() => addToCart()} className='btn btn-warning m-1'>Add to Cart</button>
                {/* <button onClick={() => dispatch(CartAction())} className='btn btn-warning m-1'>Add to Cart</button> */}
            {/* </div> */}

        </>
    )
}

export default AddCartbtn