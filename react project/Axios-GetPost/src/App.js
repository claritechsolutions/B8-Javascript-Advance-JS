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

function App() {
  return (
    <div>
      <header>
    {/* // <div className="App">
    //   <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* <World />
          <Hello />
          <Welcome /> */}
          {/* <Greet name="Smita"  position="Manager" value={[11,22,33]}>
            <p>All about Props</p>
          </Greet>
          <Greet name="Amrita"  position="Developer" value={[55,22,33]}>
          </Greet>
          */}
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      {/* <Counter/> */}
      {/* <Form/> */}
      {/* <HookCounter/> */}
      <DataFetch/>
      {/* <PostGet/> */}
    </div>
  );
}

export default App;
