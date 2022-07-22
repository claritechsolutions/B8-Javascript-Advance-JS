import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PhotoData ,PhotoData1 } from './Mapdata';


const Main = () => {
    return (
        <>
            {/* <div className='photo__header-grid'>
                <div className='grid-item'>
                    {
                        PhotoData.map((val,index)=>{
                            return(
                                <div className='gallery-item' key={index}>
                                    <img src={val.imgsrc} alt="gallery_1"/>
                                    <>
                                </div>
                            )
                        })
                    }
                </div>
            </div> */}
            {
                PhotoData.map((val,index)=>{
                    return(
                        <Card style={{ width: '18rem' ,display:'inline-grid',marginLeft:'30px' }}>
                        <Card.Img variant="top" src={val.imgsrc} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    )
                })
            }
             {
                PhotoData1.map((val,index)=>{
                    return(
                        <Card style={{ width: '18rem' ,display:'inline-grid',marginLeft:'30px' }}>
                        <Card.Img variant="top" src={val.imgsrc} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    )
                })
            }
        </>
    )
}

export default Main
