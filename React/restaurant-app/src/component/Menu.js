import React, { useState, useEffect } from "react";
import axois from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Menu = () => {
  const [menuList, setmenuList] = useState([]);
 
  useEffect(() => {
      getData();

  }, [])
    const getData=()=>{
      axois
      .get(`http://localhost:3001/Burger`)
      .then((response) => {
        console.log(response);
        setmenuList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }
const [newData,setNewData]=useState(menuList);
console.log("new data", newData);
 
const ResultDetails=(ele)=>{
  const updatedResultDetails=menuList.filter((currEle)=>{
    return ele===currEle.type;
  })
  setNewData(updatedResultDetails);
}

  return (
    <>
      <div className="container mt-4 d-flex justify-content-between">
        <Button variant="danger" className="px-3 fw-bold" onClick={()=>ResultDetails("Burger")}>Burger</Button>
        <Button variant="danger" className="px-3 fw-bold" onClick={()=>ResultDetails("Dessert")}>Dessert</Button>
        <Button variant="danger" className="px-3 fw-bold" onClick={()=>ResultDetails("Pizza")}>Pizza</Button>
        <Button variant="danger" className="px-3 fw-bold" onClick={()=>ResultDetails("Soups")}>Soups</Button>
        <Button variant="danger" className="px-3 fw-bold" onClick={()=>ResultDetails("Phavbhaji")}>Pavbhaji</Button>
        <Button variant="danger" active className="px-3 fw-bold" onClick={()=>setNewData(menuList)}>all</Button>
      
      </div>

      <div className="container d-flex mt-5" id="output">
      <div className="row">
          {newData.map((values, index) => {
            return (
              <>
               
                <div className="col-4">
               <Card className="d-flex-inline mt-3">
                <Card.Img variant="top" src={values.url} style={{height:"300px"}} />
                <Card.Body>
                  <Card.Title>{values.title}</Card.Title>
                  <Card.Text>{values.description}</Card.Text>
                  <Button variant="outline-success me-3">Order now</Button>
                  <Button variant="outline-success">Add to cart</Button>
                </Card.Body>
                </Card>
                </div>
             
              </>
            );
          })}
        
          </div>
      
      </div>
     
    </>
  );
};

export default Menu;
