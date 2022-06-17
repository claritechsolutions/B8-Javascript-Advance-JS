import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Menu from './components/NavbarLinks/Menu';
import Home from './components/NavbarLinks/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <div className="App">

    // <Menu/>
    // </div>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        {/* <Route path="/order-summary" element={<Order />}></Route> */}
      </Routes >
       {/* <Home/> */}
       {/* <Link className="text-decoration-none" to="/">HOME</Link>
          <Link className="text-decoration-none" to="/menu">MENU</Link>
          <Link className="text-decoration-none" to="/offer">OFFER</Link>
          <Link className="text-decoration-none" to="about">ABOUT US</Link>
          <Link className="text-decoration-none" to="contact">CONTACT US</Link> */}
    </>
  );
}

export default App;
