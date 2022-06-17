import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../Navbar'
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/Menu`)
      .then((response) => {
        setMenu(response.data);
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <div className='mt-3 px-5'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100" height={500} width={200}
              src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Delhi/images/4x3/the-All-New-Machan.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Ideal for Get together</h3>
              <p>Perfect place to spend time with your friens and family</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" height={500} width={200}
              src="https://www.tajhotels.com/content/dam/luxury/tajbengal/gallery/HIGH-TEA-DETAIL-2.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" height={500} width={200}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0LDrzg09Y7CJ00tYrMpsmrA6p3r7zkmultQ&usqp=CAU"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className='px-5'>
      <div className="menu-items mt-5">
        <div className="row">
          {
            menu.map((menu) =>
              <div key={menu.id} className="col-md-4">
                <div className="card">
                  <img src={`${menu.img}`} className="img-rounded" alt="Cinque Terre" />
                  <div className="card-body">
                    <h5 className="card-title">{menu.title}</h5>
                    {/* <p className="card-text">{menu.desc}</p> */}
                    
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home