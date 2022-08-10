//import logo from './logo.svg';
import './App.css';
import CreateUser from './components/CreateUser'
import { Routes, Route } from 'react-router-dom'
import NavMenu from './components/NavMenu';
import UseList from './components/UseList';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <NavMenu />
          <Routes>
            <Route path="/" element={<UseList />}/>
            <Route path="/createUser" element={<CreateUser />}/>
            <Route path="/updateuser/:id" element={<CreateUser />} />
          </Routes>
          {/* <div className="col-12">
            <h3>CRUD APPLICATION</h3>
          </div> */}
        </div>
        {/* <div className="row">
          <div className="col-12">
            <UseList />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
