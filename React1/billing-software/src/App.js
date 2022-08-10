//import logo from './logo.svg';
import './App.css';
import './Components/assest/Style.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/layout/sideBar/Navbar';
import Home from './Components/layout/Pages/Home';
import Product from './Components/layout/Pages/Product/Product'
import CategoryList from './Components/layout/Pages/Product/CategoryList'
import Customer from './Components/layout/Pages/Customer/Customer'
import CustomerList from './Components/layout/Pages/Customer/CustomerList'
import Supplier from './Components/layout/Pages/Supplier/Supplier'
import SupplierList from './Components/layout/Pages/Supplier/SupplierList'
import WareHouse from './Components/layout/Pages/Warehouse/WareHouse'
import WHouseList from './Components/layout/Pages/Warehouse/WHouseList'
import PromoCode from './Components/layout/Pages/PromoCode/PromoCode'
import PromoCodeList from './Components/layout/Pages/PromoCode/PromoCodeList'
import Roles from './Components/layout/Pages/Roles/Roles';  
import RolesList from './Components/layout/Pages/Roles/RolesList'
function App() {
  return (
    <div className="App">
           <Navbar />
          <Routes>
          <Route path='/' exact element={<Home></Home>} />
          <Route path='/product' element={<Product></Product>} />
          <Route path="/updateproduct/:id" element={<Product/>} />
          <Route path='/categorlist'  element={<CategoryList></CategoryList>} />
          <Route path='/customer' element={<Customer></Customer>} />
          <Route path="/updateuser/:id" element={<Customer />} />
          <Route path='/customerlist' element={<CustomerList></CustomerList>} ></Route>
          <Route path='/supplier' element={<Supplier></Supplier>} />
          <Route path="/updatesupplier/:id" element={<Supplier />} />
          <Route path='/supplierlist' element={<SupplierList></SupplierList>} />
          <Route path='/warehouse' element={<WareHouse></WareHouse>} />
          <Route path="/updatewarehouse/:id" element={<WareHouse />} />
          <Route path='/whouselist' element={<WHouseList></WHouseList>} />
          <Route path='/promocode' element={<PromoCode></PromoCode>} />
          <Route path="/updatepromocode/:id" element={<PromoCode />} />
          <Route path='/promocodelist' element={<PromoCodeList></PromoCodeList>} />
          <Route path='/roles' element={<Roles></Roles>} />
          <Route path="/updateroles/:id" element={<Roles />} />
          <Route path='/roleslist' element={<RolesList></RolesList>} />


         </Routes>
    
    </div>
  );
}

export default App;
