// import Order from './components/RoutingComponents/Order';
// import ComponentC from './components/useContext/ComponentC';
import React from 'react';
import './App.css';
import './index.css'

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();
// let bigObject = {
//   name: "ankit",
//   age: 27,
//   designation: []
// }
import UseReducer from './components/useReducer/UseReducer';

function App() {
  return (
    // <>
    //   <UserContext.Provider value={"ankit"}>
    //     <ChannelContext.Provider value="Javascript">
    //       Hey I'm App JS!!
    //       <ComponentC />
    //     </ChannelContext.Provider>
    //   </UserContext.Provider>
    // </>
    <div className="App">
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      <UseReducer/>
    </div>
  );
}
export default App;