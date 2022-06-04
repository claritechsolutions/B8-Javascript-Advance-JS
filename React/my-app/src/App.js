// import logo from './logo.svg';

import "./App.css";

import { Route, Routes } from "react-router-dom";
import Navbar from "./component/routerDom/Navbar";
// import User from "./component/routerDom/user";
// import Post from "./component/routerDom/posts";
// import Albums from "./component/routerDom/Albums";
// import Comments from "./component/routerDom/Comments";
import Home from "./component/routerDom/Home";
import LocalJson from "./component/routerDom/LocalJson"
import PutData from "./component/routerDom/PutData";
function App() {
  return (
    <div className="App"> 

      {/* using Routing */}
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/LocalJson" element={<LocalJson/>}></Route>
        <Route path="/PutData" element={PutData}></Route>
        {/* <Route path="/user" element={<User />}></Route>
        <Route path="/posts" element={<Post />}></Route>
        <Route path="/Albums" element={<Albums />}></Route>
        <Route path="/Comments" element={<Comments />}></Route> */}
      </Routes> 


     
    </div>
  );
}

export default App;
