//import logo from './logo.svg';
import './App.css';
import Testmemo from './Componants/usememo/Testmemo';
// import './index.css'
// Routing
//import { Routes, Route } from 'react-router-dom';
//import Navbar2 from './Componants/LocalServer/Navbar2';
// import React from 'react';

//import GetData from './Componants/UseReduce/GetData';

function App() {
  return (
    <div className="App">
     <Testmemo/>
      
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
