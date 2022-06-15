import './App.css';
import Home from './Components/RestoApp/Home';
import Menu from './Components/RestoApp/Menu';
import Offer from './Components/RestoApp/Offer';
import Aboutus from './Components/RestoApp/Aboutus';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/RestoApp/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
       
        <Route path="/" element={<Home/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/offer" element={<Offer />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>

      </Routes >
      
    </div>
  );
}

export default App;
