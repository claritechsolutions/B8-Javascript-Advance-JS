//import logo from './logo.svg';
import './App.css';
import './index.css';
import Post from './Componants/Rounting/Post';
import Get from './Componants/Rounting/Get';
import Put from './Componants/Rounting/Put';
import Delete from './Componants/Rounting/Delete';
// Routing
import { Routes, Route } from 'react-router-dom';
import Navbar from './Componants/Rounting/Navbar';



function App() {
  return (
    // <div className="App">
    //   <Home />
    //   <About />
    // </div>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Get/>}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/put" element={<Put />}></Route>
        <Route path="/delete" element={<Delete />}></Route>
        
      </Routes >
    </>
  );
}

export default App;
