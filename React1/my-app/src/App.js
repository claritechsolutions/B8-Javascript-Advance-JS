//import logo from './logo.svg';
import './App.css';
import './index.css'
import GetLocal from './Componants/LocalServer/GetLocal';
import PostLocal from './Componants/LocalServer/PostLocal';
import PutLocal from './Componants/LocalServer/PutLocal';
import DeleteLocal from './Componants/LocalServer/DeleteLocal'
// Routing
import { Routes, Route } from 'react-router-dom';
import Navbar2 from './Componants/LocalServer/Navbar2';
function App() {
  return (
    // <div className="App">
    //   <Home />
    //   <About />
    // </div>
    <>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<GetLocal/>}></Route>
        <Route path="/post" element={<PostLocal />}></Route>
        <Route path="/put" element={<PutLocal />}></Route>
        <Route path="/delete" element={<DeleteLocal />}></Route>
        
      </Routes >
    </>
  );
}

export default App;
