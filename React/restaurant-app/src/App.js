// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Menu from './component/Menu';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import Offer from './component/Offer';

function App() {
  return (

    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Menu' element={<Menu/>}></Route>
        <Route path='/Offer' element={<Offer/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
        <Route path='/ContactUs' element={<ContactUs/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
