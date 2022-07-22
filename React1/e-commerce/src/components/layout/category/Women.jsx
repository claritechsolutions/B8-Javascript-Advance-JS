import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AddCartbtn from '../cart/AddCartbtn';

const Women = () => {
  const [AllProductData, setAllProductData] = useState([]);
  const [colordata, setColorData] = useState([])
  const [colorFilterData, setColorFilterData] = useState([])
  const [cartData,setCartData]=useState([]);
  useEffect(() => {
    getAllProduct();
    getColorData();
    getCartData();
  }, [])

  const getAllProduct = () => {
    axios.get(`http://localhost:3001/products`)
      .then((response) => {
        console.log("womendata", response);
        setAllProductData(response.data);
        setColorFilterData(response.data);
        // setColorFilter(response.data);   
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const getColorData = () => {
    axios.get(`http://localhost:3001/color`)
      .then((response) => {
        console.log("color", response)
        setColorData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const getCartData=()=>{
    axios.get(`http://localhost:3001/cart`)
    .then((response)=>{
      console.log("Response",response);
      setCartData(response.data);
    }).catch((error)=>{
      console.log(error);
    })
  }

  const FilterColorCategory = (idx) => {

    console.log(idx)
    let womenDataBYColor = [...AllProductData].filter((data) => data.color_id === idx)
    console.log(womenDataBYColor);
    setColorFilterData(womenDataBYColor);
  }

  const displayAllData = (event) => {
    if (event.target.value === "All")
      setColorFilterData(AllProductData);
  }
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-lg-2 col-sm-12 border border-1">
            <h3><u>Color</u></h3>
            {
              colordata.map((coldata) => {
                return (
                  <>
                    <button onClick={() => FilterColorCategory(coldata.id)} className="btn m-3 rounded-circle p-3" style={{ backgroundColor: coldata.name }}></button>
                  </>
                )
              })
            }
            <button type="button" onClick={displayAllData} value={"All"} class="btn btn-warning">All Women's Collection</button>
          </div>
          <div className="col-10">
            <div className="row">
              {
                colorFilterData.length && colorFilterData.map((product) => {
                  if (product.category_id === 1)
                    return (
                      <div key={product.id} className="col-lg-4 col-sm-12 my-2">
                        <div className="card shadow-lg " style={{ width: '18rem' }}>
                          <img src={product.image} className="card-img-top ms-lg-5" alt="..." style={{ width: "180px", height: "190px" }} />
                          <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">Color : {product.color}</p>
                            {/* <button className='btn btn-warning m-1' onClick={()=>addToCart(product.title,product.image,product.color,product.price)}>Add To Cart</button> */}
                            <AddCartbtn product={product}/>
                            <button className='btn btn-info'>Buy Now</button>
                          </div>
                        </div>
                      </div>
                    )
                })
              }
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Women