import logo from './logo.svg';
import './App.css';
import './index.css';
import PostData from './Components/Routing/PostData';
import GetData from './Components/Routing/GetData';
import PutData from './Components/Routing/PutData';
import DeleteData from './Components/Routing/DeleteData';
import Navbar from './Components/Routing/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>React Curd Opration</h1>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<GetData/>}></Route>
        <Route path="/post" element={<PostData/>}></Route>
        <Route path="/put" element={<PutData/>}></Route>
        <Route path="/delete" element={<DeleteData/>}></Route>
        

      </Routes >
    
    </div>
  );
}

export default App;
