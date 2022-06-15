import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img4 from '../img/img4.jpg'
import img3 from '../img/img3.jpg'
import img5 from '../img/img5.jpg'
import img1 from '../img/img1.jpg'
const Home = () => {
    return (
        <div>
            <div className="container mt-2">
                <Carousel interval={500}>
                    <Carousel.Item>
                        <img src={img4} height="420" width="1250" alt="img1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img3} height="420" width="1250" alt="img2" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img5} height="420" width="1250" alt="img1" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <hr></hr>
            <div className="container">
                <div className="row">
                    <div class="col">
                        <div className="card mt-5" >
                            <img src={img1} class="card-img-top" alt="..." height="200px" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card mt-5" >
                            <img src={img3} class="card-img-top" alt="..." height="200px" />
                            <div className="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mt-5" >
                            <img src={img5} class="card-img-top" alt="..." height="200px" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div class="container mt-5">
                <h3>***Address*** </h3>
               <b> Hotel Maratha Palace Rajdhanai Satara</b>
               <p>
                   .<br/>
                   .<br/>
                   .<br/>
                   .
                   .
                   .
               </p>
            
            </div>

        </div>

    )
}

export default Home
