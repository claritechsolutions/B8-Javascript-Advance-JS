import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';

import { Route, Routes, UNSAFE_RouteContext } from 'react-router-dom';
i
import FocusInput from './components/useRef/focusInput';

function App() {
  return (

    <>
      {/* <Hello/> */}
      {/* <Welcome/> */}

      {/* <Navbar />
    <Routes>
      <Route path="/" element={<GetData/>}></Route>
      <Route path="/post" element={<PostData />}></Route>
      <Route path="/put" element={<PutData />}></Route>
      <Route path="/delete" element={<DeleteData />}></Route>
    </Routes > */}

      <div className="App">

        <FocusInput />
      </div>




    </>

  );
}

export default App;
