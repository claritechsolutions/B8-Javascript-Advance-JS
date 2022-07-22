// import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Header from './components/layout/header/Header';
import Home from './components/layout/homepage/Home';
import Shop from './components/layout/shop/Shop';
import Featured from './components/layout/fetured/Featured';
import Recommend from './components/layout/Recommended/Recommend';
import Women from './components/layout/category/Women';
import Men from './components/layout/category/Men';
import Couple from './components/layout/category/Couple'
import AddToCart from './components/layout/cart/AddToCart';
import SignIn from './components/layout/login/SignIn';
import Signup from './components/layout/login/Signup';
import Dashboard from './components/layout/dashbord/Dashboard';
import Footer from './components/layout/footer/Footer';

function App() {
  return (
    <div className="App">
  
        <Header/>     
         
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Shop' element={<Shop/>}></Route>
          <Route path='/Featured' element={<Featured/>}></Route>
          <Route path='/Recommend' element={<Recommend/>}></Route>
          <Route path='/Women' element={<Women/>}></Route>
          <Route path='/Men' element={<Men/>}></Route>
          <Route path='/Couple' element={<Couple/>}></Route>
          <Route path='/AddToCart' element={<AddToCart/>}></Route>
          <Route path='/SignIn' element={<SignIn/>}></Route>
          <Route path='/Signup' element={<Signup/>}></Route>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
        </Routes>
        <Footer/>
        {/* <Text/> */}
    </div>
  );
}

export default App;
