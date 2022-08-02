
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";
import Dashboard from "./components/pages/Dashboard";
import Customer from "./components/pages/customer/Customer";
import Warehouse from "./components/pages/warehouse/Warehouse";
import Roles from "./components/pages/Roles";
import Supplier from "./components/pages/supplier/Supplier";
import Product from "./components/pages/Product";
import ProductCategory from "./components/pages/ProductCategory";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Invoices from "./components/pages/Invoices";
import Purchaseorder from "./components/pages/Purchaseorder";
import Promocodes from "./components/pages/Promocodes";
import Viewcust from "./components/pages/customer/Viewcust"
import Editcust from "./components/pages/customer/Editcust"
import Addcust from "./components/pages/customer/Addcust";
import Addsupp from "./components/pages/supplier/Addsupp";
import EditSupp from "./components/pages/supplier/EditSupp";
import AddWareh from "./components/pages/warehouse/AddWareh";
import EditWareh from "./components/pages/warehouse/EditWareh";


function App() {
  return ( 
    <div className="App">
      <Router>
        <Navbar />
        <div class="container-fluid" id="main">
          <div class="row row-offcanvas row-offcanvas-left">
            <Sidebar />
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/customer" element={<Customer />}></Route> 
          <Route exact path="/user/:id" element={<Viewcust />} ></Route>
          <Route exact path="/user/edit/:id" element={<Editcust />}></Route>
          <Route exact path="/user/add" element={<Addcust />}></Route>
          <Route exact path="/warehouse" element={<Warehouse />}></Route>
          <Route exact path="/warehouse/add" element={<AddWareh />}></Route>
          <Route exact path="/warehouse/edit/:id" element={<EditWareh />}></Route>
          <Route exact path="/supplier" element={<Supplier />}></Route>
          <Route exact path="/supplier/add" element={<Addsupp />}></Route>
          <Route exact path="/supplier/edit/:id" element={<EditSupp />}></Route>
          <Route exact path="/product/category" element={<ProductCategory />}></Route>
          <Route exact path="/product" element={<Product />}></Route>
          <Route exact path="/invoices" element={<Invoices />}></Route>
          <Route exact path="/puchase/order" element={<Purchaseorder />}></Route>
          <Route exact path="/roles" element={<Roles />}></Route>
          <Route exact path="/promo/codes" element={<Promocodes />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
