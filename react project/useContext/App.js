import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import World from './components/world';
import Welcome from './components/welcome';
import Greet from './components/greet';
import Counter from './components/counter';
import Form from './components/form';
import HookCounter from './components/useEffect/Hookcounter'
import DataFetch from './components/useEffect/FetchData';
import PostGet from './components/useEffect/PostGet';
import Navbar from './components/RoutingElements/Navbar';
import GetData from './components/RoutingElements/GetData';
import PostData from './components/RoutingElements/PostData';
import { Route, Routes, UNSAFE_RouteContext } from 'react-router-dom';
import PutData from './components/RoutingElements/PutData';
import DeleteData from './components/RoutingElements/DeleteData';
import ComponentC from './components/usecontext/ComponentC';
import React from 'react';


export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (

    <>
      {/* <Navbar />
    <Routes>
      <Route path="/" element={<GetData/>}></Route>
      <Route path="/post" element={<PostData />}></Route>
      <Route path="/put" element={<PutData />}></Route>
      <Route path="/delete" element={<DeleteData />}></Route>
    </Routes > */}

      <UserContext.Provider value="First Context">
        <ChannelContext.Provider value="First Channel">
          This is App.js
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
