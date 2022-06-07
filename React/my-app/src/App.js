// import logo from './logo.svg';

import "./App.css";

import { Route, Routes } from "react-router-dom";
// import Navbar from "./component/routerDom/Navbar"
// import User from "./component/routerDom/user";
// import Post from "./component/routerDom/posts";
// import Albums from "./component/routerDom/Albums";
// import Comments from "./component/routerDom/Comments";
// import Home from "./component/routerDom/Home";
// import LocalJson from "./component/routerDom/LocalJson"
// import PutData from "./component/routerDom/PutData";
// import PostData from "./component/localJsonRouting/PostData";

//new Project

import NavbarLocal from "./component/localJsonRouting/NavbarLocal";
import Home from "./component/localJsonRouting/Home";
import GetData from "./component/localJsonRouting/GetData";
import PostData from "./component/localJsonRouting/PostData";
// import PutData from "./component/localJsonRouting/PutData";
import Delete from "./component/localJsonRouting/Delete";
import UpdateData from "./component/localJsonRouting/UpdateData";
// import Darshan from "./component/localJsonRouting/Darshan";
// import DeleteData  from "./component/localJsonRouting/DeleteData";
function App() {
  return (
    <div className="App"> 

      {/* using Routing */}
      <NavbarLocal />
      {/* <Navbar/> */}
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/GetData" element={<GetData/>}></Route>
        <Route path="/PostData" element={<PostData/>}></Route> 
        {/* <Route path="/PutData" element={<PutData/>}></Route> */}
        <Route path="/UpdateData" element={<UpdateData/>}></Route>
        <Route path="/Delete" element={<Delete/>}></Route>
        {/* <Route path="/Darshan" element={<Darshan/>}></Route> */}
        


      {/* <Route path="/" element={<Home />}>Home</Route>
         <Route path="/LocalJson" element={<LocalJson/>}></Route>
        <Route path="/PutData" element={<PutData/>}></Route>  */}
      </Routes>     
    </div>
  );
}

export default App;
