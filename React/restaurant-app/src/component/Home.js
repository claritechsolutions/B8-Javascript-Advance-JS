import React from "react";
import Img1 from "../slider/one.jpg";
import Img2 from "../slider/two.jpg";
import Img3 from "../slider/three.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Home;
