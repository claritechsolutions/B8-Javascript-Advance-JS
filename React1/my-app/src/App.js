//import logo from './logo.svg';
import './App.css';
//import FocusInput from './Componants/UseRef/FocusInput';
import Signup from './Componants/UseState/Signup';
// import './index.css'
// Routing
//import { Routes, Route } from 'react-router-dom';
//import Navbar2 from './Componants/LocalServer/Navbar2';
// import React from 'react';
// import Counter from './Componants/UseReduce/Counter';
// import Counter2 from './Componants/UseReduce/Counter2';
// import Form from './Componants/UseReduce/Form';
//import GetData from './Componants/UseReduce/GetData';

function App() {
  return (
    <div className="App">
      {/* <Counter2/>
      <Counter/>
      <Form/> */}
      {/* <GetData/> */}
      {/* <FocusInput/> */}
      <Signup/>
    </div>
    // <>
    //   <Navbar2 />
    //   <Routes>
    //     <Route path="/" element={<GetLocal/>}></Route>
    //     <Route path="/post" element={<PostLocal />}></Route>
    //     <Route path="/put" element={<PutLocal />}></Route>
    //     <Route path="/delete" element={<DeleteLocal />}></Route>
        
    //   </Routes >
    // </>
  );
}

export default App;
