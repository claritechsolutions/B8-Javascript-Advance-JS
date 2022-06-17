import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../Navbar'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [category, setCategory] = useState(menu);


  useEffect(() => {
    axios.get(`http://localhost:3001/Menu`)
      .then((response) => {
        setMenu(response.data);
      })
      .catch((error) => console.log(error))
  }, [])

  const filterCategory = (menu, category) => {
    let filterdCategoryMenu = menu?.filter((menu) => menu.category === category);
    setCategory(filterdCategoryMenu);
    // return filterdCategoryMenuItems;
  }

  return (
    <div>
      <div className='Container mt-2'>
        <div className='row bg-warning bg-opacity-50'>
          <div className='col-12'>
            <ul className="nav nav-tabs justify-content-center gap-4" id="myTab" role="tablist">
              <li className="nav-item py-3" >
                <button type="button" onClick={() => filterCategory(menu, "Burger")} className="btn btn-danger">Burger</button></li>
              <li className="nav-item py-3" >
                <button type="button" onClick={() => filterCategory(menu, "Dessert")} className="btn btn-danger">Dessert</button></li>
              <li className="nav-item py-3" >
                <button type="button" onClick={() => filterCategory(menu, "Burger")} className="btn btn-danger">Soups</button></li>
              <li className="nav-item py-3" >
                <button type="button" onClick={() => filterCategory(menu, "Pizza")} className="btn btn-danger">Pizza</button></li>
              <li className="nav-item py-3" >
                <button type="button" onClick={() => filterCategory(menu, "Burger")} className="btn btn-danger">Pasta</button></li>
              <li className="nav-item py-3" >
                <button type="button" onClick={() => filterCategory(menu, "Burger")} className="btn btn-danger">PavBhaji</button></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='px-5'>
        <div className="menu-items mt-5">
          <div className="row">
            {
              category.map((menu) =>
                <div key={menu.id} className="col-md-4">
                  <div className="card">
                    <img src={`${menu.img}`} className="img-rounded" alt="Cinque Terre" />
                    <div className="card-body">
                      <h5 className="card-title">{menu.title}</h5>
                      <p className="card-text">{menu.desc}</p>
                      <p className="card-text"><b>MRP: ₹{menu.price}/-</b></p><Button variant="secondary" size="sm">
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>

      {/* <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div> */}

    </div>
  )
}

export default Menu